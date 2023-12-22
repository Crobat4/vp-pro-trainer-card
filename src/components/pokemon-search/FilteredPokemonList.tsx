import React from 'react';
import { getPokemonImage } from 'modules/Utils';
import States from 'modules/States';
import PokemonData from 'modules/pokemon/PokemonData';
import { PokemonWithSubForms } from 'modules/Constants';
import PokemonButton from 'components/pokemon-button';

// Pokemon list buttons
const handlePokemonClick = (pokemonID, formID, formName) => {
    //const pokemon = Data.slotList[States.modal.pokemonSlotID];
    const pokemon = States.modal.pokemonSlot.pokemon;
    pokemon.id = pokemonID;
    pokemon.shiny = States.search.shiny.value;
    pokemon.female = States.search.female.value;
    pokemon.formID = formID;
    pokemon.formName = formName;
    pokemon.subFormID = 0;

    States.modal.pokemonListModal.value = false;
};

const handleSubFormClick = (pokemonID, formID, formName) => {
    const pokemon = States.modal.pokemonSlot.pokemon;
    pokemon.id = pokemonID;
    pokemon.shiny = States.search.shiny.value;
    pokemon.female = States.search.female.value;
    pokemon.formID = formID;
    pokemon.formName = formName;

    States.subFormModal.value = true;
    States.subFormPokemon = pokemon;
};

/**
 * Generates the buttons for each filtered Pokemon in the search modal
 * @param itemList Pokemon list object array
 * @returns Array // HTML elements of Pokemon list
 */
type Props = {
    itemList: Array<PokemonData>,
}
function FilteredPokemonList({ itemList }: Props) {
    const listItems = itemList?.map((pokemon) => {
        const imgSrc = getPokemonImage(pokemon.id, States.search.shiny.value, States.search.female.value, pokemon.formID);
        const list = (
            <PokemonButton id={pokemon.id} name={pokemon.prettyName} formID={pokemon.formID} formName={pokemon.formPrettyName}
                onClick={() => {
                    if (PokemonWithSubForms.find((id) => pokemon.id === id) && pokemon.hasSubForm && !States.search.shiny.value) {
                        handleSubFormClick(pokemon.id, pokemon.formID, pokemon.form.formName);
                    } else {
                        handlePokemonClick(pokemon.id, pokemon.formID, pokemon.form.formName);
                    }
                }}
                imgSrc={imgSrc}
            />
        );
        return list;
    });
    const pokemonElementsList = <>{listItems}</>;
    return pokemonElementsList;
}

export default FilteredPokemonList;
