import React from 'react';
import States from 'modules/States';
import PokemonSearchStates from 'modules/emums/PokemonSearchState';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Star, Female } from 'modules/Constants';

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
            <div className="form-check p-0 pokemon-search input-group">
                <input id="search-box" className="form-control m-0" type="text" name="search-pkmn" placeholder="Search Pokémon..." onChange={filterBySearch} />

                <input type="checkbox" className="btn-check d-none" style="opacity: 0;" id="btn-check-shiny" autoComplete="off" checked={States.search.shiny.value} onClick={toggleShiny}/>
                <OverlayTrigger placement="bottom" overlay={(props) => (
                    <Tooltip id="button-tooltip" {...props}>
                        Toggle Shiny images
                    </Tooltip>
                )}>
                    <label className="btn btn-warning btn-shiny" htmlFor="btn-check-shiny">
                        <img src={Star} width={30} height={30}/>
                    </label>
                </OverlayTrigger>

                <input type="checkbox" className="btn-check d-none" style="opacity: 0;" id="btn-check-female" autoComplete="off" checked={States.search.female.value} onClick={toggleFemale}/>
                <OverlayTrigger placement="bottom" overlay={(props) => (
                    <Tooltip id="button-tooltip" {...props}>
                        Toggle female images (when applies)
                    </Tooltip>
                )}>
                    <label className="btn btn-warning btn-female" htmlFor="btn-check-female">
                        <img className="" src={Female} width={30} height={30}/>
                    </label>
                </OverlayTrigger>
            </div>
        </>
    );
}

export default SearchBar;
