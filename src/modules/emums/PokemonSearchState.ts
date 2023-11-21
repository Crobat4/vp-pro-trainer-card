enum PokemonSearchStates {
    Initial, // Less than two characters
    OneLeftCharacter,
    Success, // Pokemon list generated
    Failed, // No results
}

export default PokemonSearchStates;
