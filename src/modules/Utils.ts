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

export function getPokemonImage(id = 0, shiny = false, female = false, formID = 0, formName = '') {
    const isGMax = formName === 'gmax';
    const femaleToggle = female && !isGMax && States.pokemonList.value.find((p) => p.id === id && p.formID === formID).genderDifferences;
    const isForm = formID > 0;
    return `assets/${shiny ? 'shiny' : ''}pokemon/${femaleToggle ? 'female/' : ''}${isForm || isGMax ? 'forms/' : ''}${id.toString().padStart(4, '0')}${isForm || isGMax ? `_${formID.toString().padStart(3, '0')}` : ''}${isGMax ? '_GMAX' : ''}.png`;
}

export function sanitizeString(str) { // Remove all non-alphanumeric characters (except blank spaces)
    return str.replace(/[^a-z0-9 ]/i, '');
}

export function spacesToDashesLowerCase(str: string) { // Replace all spaces and non-alphanumeric characters with dash (-)
    return str.replace(/\W+/g, '-').toLowerCase();
}
