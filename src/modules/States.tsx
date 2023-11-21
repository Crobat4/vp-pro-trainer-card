import { signal } from '@preact/signals';
import PokemonSearchStates from './emums/PokemonSearchState';

export default class States {
    public static pokemonList = signal([]);
    public static moveList = signal([]);
    public static search = { filteredSearchList: signal([]), shiny: signal(false), female: signal(false), all: signal(false), state: signal(PokemonSearchStates.Initial) };
    public static modal = { pokemonListModal: signal(false), pokemonSlotID: 0 };
    public static loadingState = signal(true);

    public static count = 0;
    public static countTemplate = 0;
}
