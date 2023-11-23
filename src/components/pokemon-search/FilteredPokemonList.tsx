import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getPokemonImage } from 'src/modules/Constants';
import States from 'src/modules/States';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import TemplateData from '../trainer-card-preview/TemplateData';
import PokemonData from 'src/modules/pokemon/PokemonData';

// Pokemon list buttons
const handlePokemonClick = (pokemonID) => {
    const pokemon = TemplateData.slotList[States.modal.pokemonSlotID];
    pokemon.id = pokemonID;
    pokemon.shiny = States.search.shiny.value;
    pokemon.female = States.search.female.value;

    States.modal.pokemonListModal.value = false;
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
        const list =
            <div className="col-6 col-md-2">
                <OverlayTrigger placement="bottom" flip={true} overlay={(props) => (
                    <Tooltip id="button-tooltip" {...props} name={pokemon.prettyName}>
                        {pokemon.prettyName}
                    </Tooltip>
                )}>
                    <button className="pokemon-btn btn btn-light d-block m-auto my-3" data-id={pokemon.id} onClick={() => handlePokemonClick(pokemon.id)}>
                        <LazyLoadImage
                            className="gallery-img"
                            effect={'opacity'}
                            src={getPokemonImage(pokemon.id, States.search.shiny.value, States.search.female.value)}
                            width={130}
                            wrapperClassName="gallery-img-wrapper"
                            threshold={200}
                        />
                    </button>
                </OverlayTrigger>
            </div>;
        return list;
    });
    const pokemonElementsList = <>{listItems}</>;
    return pokemonElementsList;
}

export default FilteredPokemonList;
