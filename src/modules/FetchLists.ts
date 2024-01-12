import { useState, useEffect } from 'preact/hooks';
import axios from 'axios';
import { BannedForms, BannedMoves } from 'modules/Constants';
import { sanitizeString } from 'modules/Utils';
import PokemonData from 'modules/pokemon/PokemonData';

export function fetchPokemonList() {
    const [pokemonData, setPokemonData] = useState([]);
    const lastPokemonID = 1017; // Ogerpon
    useEffect(() => {
        console.log('Getting all Pokemon data...');
        Promise.all(Array.from({ length: lastPokemonID }, (_, i) =>
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${i + 1}`)
                //.then(res => res.json())
                .then((r) => {
                    return axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
                        .then((res) => {
                            return new PokemonData(
                                r.data.id,
                                r.data.name,
                                r.data.has_gender_differences,
                                r.data.names.find((ns) => ns.language.name == 'en').name,
                                {
                                    primary: res.data.types[0]?.type.name,
                                    secondary: res.data.types[1]?.type.name,
                                }
                            );
                        });
                })
        )).then(setPokemonData);
    },[]);
    //console.log(JSON.stringify(pokemondata))
    console.log(pokemonData);
    return pokemonData;
}

export function fetchPokemonFormsList() {
    const [pokemonFormsData, setPokemonFormsData] = useState([]);
    const lastPokemonID = 1017;
    const lastPokemonFormID = 444;
    useEffect(() => {
        console.log('Getting all Pokemon Forms data...');
        Promise.all(Array.from({ length: lastPokemonID + lastPokemonFormID }, (_, i) =>
            axios.get(`https://pokeapi.co/api/v2/pokemon-form/${i + (i < lastPokemonID ? 0 : 10000 - lastPokemonID) + 1}`)
                //.then(res => res.json())
                .then((resPokemonForm) => {
                    const urlPokemon = resPokemonForm.data.pokemon.url;
                    return axios.get(urlPokemon)
                        .then((resPokemon) => {
                            const urlPokemonSpecies = resPokemon.data.species.url;
                            return axios.get(urlPokemonSpecies)
                                .then((resPokemonSpecies) => {
                                    const isBannedForm = BannedForms.find((bf) => bf === resPokemonForm.data.name);
                                    if (!isBannedForm) {
                                        return new PokemonData(
                                            resPokemonSpecies.data.id,
                                            resPokemonSpecies.data.name,
                                            resPokemonForm.data.id <= lastPokemonID ? resPokemonSpecies.data.has_gender_differences : false,
                                            resPokemonSpecies.data.names.find((ns) => ns.language.name == 'en').name,
                                            {
                                                primary: resPokemonForm.data.types[0]?.type.name,
                                                secondary: resPokemonForm.data.types[1]?.type.name,
                                            },
                                            resPokemonForm.data.form_order - 1,
                                            {
                                                formName: resPokemonForm.data.form_name,
                                                fullFormName: resPokemonForm.data.name,
                                            },
                                            resPokemonForm.data.form_names.find((ns) => ns.language.name == 'en')?.name
                                        );
                                    }
                                });
                        });
                })
        )).then(setPokemonFormsData);
    },[]);
    //console.log(JSON.stringify(pokemonFormsData))
    console.log(pokemonFormsData?.filter((pf) => pf).sort((a,b) => a.id - b.id));
    return pokemonFormsData;
}

export function fetchMoveList() {
    const [moveData, setMoveData] = useState([]);
    const lastMoveID = 919;
    useEffect(() => {
        console.log('Getting all move data...');
        Promise.all(Array.from({ length: lastMoveID }, (_, i) =>
            axios.get(`https://pokeapi.co/api/v2/move/${i + 1}`)
                //.then(res => res.json())
                .then((r) => {
                    const prettyName = r.data.names.find((ns) => ns.language.name == 'en').name;
                    const isZMove = BannedMoves.find((zm) => sanitizeString(zm).toLowerCase() === sanitizeString(prettyName).toLowerCase());
                    if (!isZMove) {
                        return {
                            value: r.data.id,
                            label: prettyName,
                        };
                    }
                })
            //.catch((error) => console.log(error))
        )).then(setMoveData);
    },[]);
    //console.log(JSON.stringify(pokemondata))
    // Filter: Remove all undefined elements (Banned moves)
    console.log(moveData?.filter((m) => m));
    return moveData;
}
