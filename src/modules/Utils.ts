import PokemonType from 'modules/emums/PokemonType';
import States from 'modules/States';

export function enumStrings(enumList: any): string[] {
    return Object.keys(enumList).filter((key) => Number.isNaN(Number(key)));
}

export function camelCaseToString(text) {
    return text.replace(/[\s_-]?([A-Z])/g, ' $1').replace(/\b\w/g, (w) => (w.replace(/\w/, (c) => c.toUpperCase()))).trim();
}

export function generateTypeSelect() {
    const types = [];
    Object.entries(enumStrings(PokemonType)).forEach(([keys, value]) => {
        types.push({ value: PokemonType[value], label: value });
        //console.log(PokemonType[value], value)
    });
    return types;
}

export function getPokemonImage(id = 0, shiny = false, female = false) {
    const femaleToggle = female && States.pokemonList.value.find((p) => p.id === id).genderDifferences;
    return `assets/${shiny ? 'shiny' : ''}pokemon/${femaleToggle ? 'female/' : ''}${id.toString().padStart(4, '0')}.png`;
}

export function sanitizeString(str) { // Remove all non-alphanumeric characters (except blank spaces)
    return str.replace(/[^a-z0-9 ]/i, '');
}
