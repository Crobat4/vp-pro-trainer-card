import React from 'preact/compat';
import States from 'modules/States';
import { camelCaseToString, getPokemonByID, getPokemonImage } from 'modules/Utils';
import ModalTemplate from 'components/shared/ModalTemplate';
import AlcremieCreamType from 'src/modules/emums/AlcremieCreamType';
import PokemonButton from 'components/pokemon-button';

const handlePokemonClick = (pokemonID, formID, subFormID) => {
    const pokemon = States.modal.pokemonSlot.pokemon;
    pokemon.id = pokemonID;
    pokemon.shiny = States.search.shiny.value;
    pokemon.female = States.search.female.value;
    pokemon.formID = formID;
    pokemon.subFormID = subFormID;

    States.subFormModal.value = false;
    States.modal.pokemonListModal.value = false;
};

type Props = {
    pokemon: any;
}

function AlcremieContent({ pokemon }: Props) {
    const pokemonData = getPokemonByID(pokemon.id, pokemon.formID);
    return (
        <>
            {Array.from({length: 9}, (val, key) => {
                const imgSrc = getPokemonImage(pokemon.id, States.search.shiny.value, States.search.female.value, pokemon.formID, key);
                return (
                    <PokemonButton key={key} id={pokemon.id} name={pokemonData.prettyName}
                        formID={pokemon.formID} formName={`${pokemonData.formPrettyName} ${camelCaseToString(AlcremieCreamType[key])}`}
                        onClick={() => handlePokemonClick(pokemon.id, pokemon.formID, key)} imgSrc={imgSrc}
                    />
                );
            })}
        </>
    );
}

function AlcremieModal() {
    return (
        <ModalTemplate bodyClass={'row'} modalClass={'h-100-modal'} size={'xl'} title={'Select Alcremie\'s cream type'}
            show={States.subFormModal.value} onClose={() => States.subFormModal.value = false}
        >
            <AlcremieContent pokemon={States.subFormPokemon} />
        </ModalTemplate>
    );
}

export default AlcremieModal;
