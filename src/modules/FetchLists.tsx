import { useState, useEffect } from 'preact/hooks';
import axios from 'axios';
import { bannedMoves, sanitizeString } from 'modules/Constants';
import PokemonData from './pokemon/PokemonData';

export function fetchPokemonList() {
    const [pokemondata, setPokemondata] = useState([]);
    const lastPokemonID = 1017; // Ogerpon
    useEffect(() => {
        console.log('ccc');
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
        )).then(setPokemondata);
    },[]);
    //console.log(JSON.stringify(pokemondata))
    //console.log(pokemondata)
    return pokemondata;
}

export function fetchMoveList() {
    const [movedata, setMovedata] = useState([]);
    const lastMoveID = 904;
    useEffect(() => {
        console.log('ddd');
        Promise.all(Array.from({ length: lastMoveID }, (_, i) =>
            axios.get(`https://pokeapi.co/api/v2/move/${i + 1}`)
                //.then(res => res.json())
                .then((r) => {
                    const prettyName = r.data.names.find((ns) => ns.language.name == 'en').name;
                    const isZMove = bannedMoves.find((zm) => sanitizeString(zm).toLowerCase() === sanitizeString(prettyName).toLowerCase());
                    if (!isZMove) {
                        return {
                            value: r.data.id,
                            label: prettyName,
                        };
                    }
                })
            //.catch((error) => console.log(error))
        )).then(setMovedata);
    },[]);
    //console.log(JSON.stringify(pokemondata))
    //console.log(movedata)
    return movedata;
}
