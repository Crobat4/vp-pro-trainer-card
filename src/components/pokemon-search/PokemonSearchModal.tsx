import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import States from 'modules/States';
import PokemonSearchStates from 'modules/emums/PokemonSearchState';
import FilteredPokemonList from 'components/pokemon-search/FilteredPokemonList';
import SearchBar from 'components/pokemon-search/SearchBar';

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

// Modal
const handleClose = () => {
    States.modal.pokemonListModal.value = false;
    States.search.filteredSearchList.value = [];
    States.search.state.value = PokemonSearchStates.Initial;
};

function PokemonSearchModal() {
    return (
        <Modal
            show={States.modal.pokemonListModal.value}
            className='search-list-modal'
            onExited={handleClose}
            backdrop="static"
            scrollable={true}
            size='xl'
        >
            <Modal.Header>
                <div className="search-box-close-button d-flex">
                    <div className={'flex-grow-1'}>
                        <SearchBar />
                    </div>
                    <div className={'form-check d-md-flex d-none'}>
                        <Button className={'h-100'} variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                </div>
            </Modal.Header>
            <Modal.Body className={`${generateBodyBGClass()}`}>
                <div id="item-list" className="row">
                    <FilteredPokemonList itemList={States.search.filteredSearchList.value} />
                </div>
            </Modal.Body>
            <Modal.Footer className={'d-md-none d-flex'}>
                <Button className={'h-100'} variant="danger" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default PokemonSearchModal;
