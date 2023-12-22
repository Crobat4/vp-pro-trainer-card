import { signal } from '@preact/signals';
import PokemonSearchStates from 'modules/emums/PokemonSearchState';

export default class States {
    public static pokemonList = signal([]);
    public static moveList = signal([]);
    public static search = { filteredSearchList: signal([]), shiny: signal(false), female: signal(false), all: signal(false), state: signal(PokemonSearchStates.Initial) };
    public static modal = { pokemonListModal: signal(false), pokemonSlot: null };
    public static loadingState = signal(true);
    public static darkMode = signal(false);

    public static subFormModal = signal(false);
    public static subFormPokemon = null;
}
