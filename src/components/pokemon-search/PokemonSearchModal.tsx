import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import States from 'modules/States';
import PokemonSearchStates from 'modules/emums/PokemonSearchState';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getPokemonImage } from 'modules/Constants';
import TemplateData from 'components/trainer-card-preview/TemplateData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Search from 'components/pokemon-search/Search';

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
function PokemonListButtons(itemList) {
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
    return listItems;
}



// Modal
function generateBodyBGClass() {
    let bgClass = '';
    switch (States.search.state.value) {
        case PokemonSearchStates.Initial:
            bgClass = 'empty-list-bg less-than-two-characters';
            break;
        case PokemonSearchStates.OneLeftCharacter:
            bgClass = 'empty-list-bg one-left-character';
            break;
        case PokemonSearchStates.Failed:
            bgClass = 'empty-list-bg no-results';
            break;
        default:
    }
    return bgClass;
}

function PokemonImageList() {
    // Modal
    const handleClose = () => {
        States.modal.pokemonListModal.value = false;
        States.search.filteredSearchList.value = [];
        States.search.state.value = PokemonSearchStates.Initial;
    };

    return (
        <>
            <Modal show={States.modal.pokemonListModal.value} className='search-list-modal' onExited={handleClose} backdrop="static" scrollable={true} size='xl'>
                <Modal.Header>
                    <div className="search-box-close-button">
                        <Search />
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                </Modal.Header>
                <Modal.Body className={`${generateBodyBGClass()}`}>
                    {/*<PokemonListButtons />*/}
                    <div id="item-list" className="row">
                        {PokemonListButtons(States.search.filteredSearchList.value)}
                    </div>
                </Modal.Body>
                {/*
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
                */}
            </Modal>
        </>
    );
}

export default PokemonImageList;
