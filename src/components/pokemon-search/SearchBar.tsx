import React from 'react';
import States from 'modules/States';
import PokemonSearchStates from 'modules/emums/PokemonSearchState';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Stars } from 'react-bootstrap-icons';

function filterBySearch(event) {
    const searchMinCharacters = 2;
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    let updatedList = [];
    // Include all elements which includes the search query
    if (query.length >= searchMinCharacters) {
        updatedList = [...States.pokemonList.value];
        updatedList = updatedList.filter((item) => {
            return (
                item.prettyName.toLowerCase().indexOf(query.toLowerCase()) !== -1 || // By name
                item.formPrettyName.toLowerCase().indexOf(query.toLowerCase()) !== -1 // By form name
            );
        });
        // Trigger render with updated values
        //setFilteredList(updatedList);
        States.search.filteredSearchList.value = updatedList;

    } else {
        States.search.filteredSearchList.value = [];
    }
    // Search state
    if (query.length < searchMinCharacters) {
        States.search.state.value = PokemonSearchStates.Initial;
        if (searchMinCharacters - query.length === 1) {
            States.search.state.value = PokemonSearchStates.OneLeftCharacter;
        }
    } else if (query.length >= searchMinCharacters && States.search.filteredSearchList.value.length) {
        States.search.state.value = PokemonSearchStates.Success;
    } else {
        States.search.state.value = PokemonSearchStates.Failed;
    }
}

// Search
function SearchBar() {
    //const [filteredList, setFilteredList] = useState(null);

    const toggleShiny = e => {
        const checkedShiny = !States.search.shiny.value;
        States.search.shiny.value = checkedShiny;
    };
    const toggleFemale = e => {
        const checkedFemale = !States.search.female.value;
        States.search.female.value = checkedFemale;
    };

    return (
        <>
            <div className="form-check p-0 pokemon-search d-flex">
                <div className={'flex-grow-1'}>
                    <input id="search-box" className="form-control m-0 search-bar" type="text" name="search-pkmn" placeholder="Search Pokémon..." onChange={filterBySearch} />
                </div>
                <div className={'d-flex'}>
                    <input type="checkbox" className="btn-check d-none" style="opacity: 0;" id="btn-check-shiny" autoComplete="off" checked={States.search.shiny.value} onClick={toggleShiny}/>
                    <OverlayTrigger placement="bottom" overlay={(props) => (
                        <Tooltip id="button-tooltip" {...props}>
                            Toggle Shiny
                        </Tooltip>
                    )}>
                        <label className="rounded-circle btn-shiny btn-shiny-gender ms-2" htmlFor="btn-check-shiny">
                            <Stars size={24} />
                        </label>
                    </OverlayTrigger>

                    <input type="checkbox" className="btn-check d-none" style="opacity: 0;" id="btn-check-female" autoComplete="off" checked={States.search.female.value} onClick={toggleFemale}/>
                    <OverlayTrigger placement="bottom" overlay={(props) => (
                        <Tooltip id="button-tooltip" {...props}>
                            Toggle Gender (when applies)
                        </Tooltip>
                    )}>
                        <label className="rounded-circle btn-gender btn-shiny-gender ms-2" htmlFor="btn-check-female">
                            <i className={States.search.female.value ? 'icon-female' : 'icon-male'} style={{fontSize: 24}} />
                        </label>
                    </OverlayTrigger>
                </div>
            </div>
        </>
    );
}

export default SearchBar;
