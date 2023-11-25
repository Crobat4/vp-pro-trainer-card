import States from 'modules/States';
import PokemonType from 'modules/emums/PokemonType';

export const TypeColors = [
    { base: '#c5b3b2', dark: '#a79694', darker: '#817371' }, // Normal
    { base: '#58ac3a', dark: '#45882d', darker: '#356623' }, // Grass
    { base: '#ec5d2e', dark: '#d24924', darker: '#ac361c' }, // Fire
    { base: '#228abb', dark: '#1b6e96', darker: '#155370' }, // Water
    { base: '#8e4f53', dark: '#713f42', darker: '#553032' }, // Fighting
    { base: '#9ebddf', dark: '#7f9cc5', darker: '#60799e' }, // Flying
    { base: '#8d44a3', dark: '#713682', darker: '#542961' }, // Poison
    { base: '#c4a250', dark: '#a2833f', darker: '#7b6230' }, // Ground
    { base: '#858257', dark: '#6a6745', darker: '#504e35' }, // Rock
    { base: '#adbd21', dark: '#8a971a', darker: '#687114' }, // Bug
    { base: '#7977a8', dark: '#616088', darker: '#494866' }, // Ghost
    { base: '#eec717', dark: '#d3a913', darker: '#d3a913' }, // Electric
    { base: '#dd4ba3', dark: '#c03a82', darker: '#992d63' }, // Psychic
    { base: '#69d9df', dark: '#53bdc5', darker: '#3f979e' }, // Ice
    { base: '#34857c', dark: '#296a63', darker: '#1f4f4a' }, // Dragon
    { base: '#455160', dark: '#2e3743', darker: '#161e27' }, // Dark
    { base: '#98a2ac', dark: '#7a848d', darker: '#5c646a' }, // Steel
    { base: '#f7afcf', dark: '#ec8db3', darker: '#d16a8b' }, // Fairy
];

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

export const bannedMoves = [
    // Typed Z-Moves
    'Breakneck Blitz',
    'All-Out Pummeling',
    'Supersonic Skystrike',
    'Acid Downpour',
    'Tectonic Rage',
    'Continental Crush',
    'Savage Spin-Out',
    'Never-Ending Nightmare',
    'Corkscrew Crash',
    'Inferno Overdrive',
    'Hydro Vortex',
    'Bloom Doom',
    'Gigavolt Havoc',
    'Shattered Psyche',
    'Subzero Slammer',
    'Devastating Drake',
    'Black Hole Eclipse',
    'Twinkle Tackle',
    // Signature Z-Moves
    'Catastropika',
    '10,000,000 Volt Thunderbolt',
    'Stoked Sparksurfer',
    'Extreme Evoboost',
    'Pulverizing Pancake',
    'Genesis Supernova',
    'Sinister Arrow Raid',
    'Malicious Moonsault',
    'Oceanic Operetta',
    'Splintered Stormshards',
    'Let\'s Snuggle Forever',
    'Clangorous Soulblaze',
    'Guardian of Alola',
    'Searing Sunraze Smash',
    'Menacing Moonraze Maelstrom',
    'Light That Burns the Sky',
    'Soul-Stealing 7-Star Strike',
    // Max Moves
    'Max Strike',
    'Max Knuckle',
    'Max Airstream',
    'Max Ooze',
    'Max Quake',
    'Max Rockfall',
    'Max Flutterby',
    'Max Phantasm',
    'Max Steelspike',
    'Max Flare',
    'Max Geyser',
    'Max Overgrowth',
    'Max Lightning',
    'Max Mindstorm',
    'Max Hailstorm',
    'Max Wyrmwind',
    'Max Darkness',
    'Max Starfall',
    'Max Guard',
    // G-Max Moves
    'G-Max Vine Lash',
    'G-Max Wildfire',
    'G-Max Cannonade',
    'G-Max Befuddle',
    'G-Max Volt Crash',
    'G-Max Gold Rush',
    'G-Max Chi Strike',
    'G-Max Terror',
    'G-Max Foam Burst',
    'G-Max Resonance',
    'G-Max Cuddle',
    'G-Max Replenish',
    'G-Max Malodor',
    'G-Max Meltdown',
    'G-Max Drum',
    'G-Max Fireball',
    'G-Max Hydrosnipe',
    'G-Max Wind Rage',
    'G-Max Gravitas',
    'G-Max Stonesurge',
    'G-Max Volcalith',
    'G-Max Tartness',
    'G-Max Sweetness',
    'G-Max Sandblast',
    'G-Max Stun Shock',
    'G-Max Centiferno',
    'G-Max Smite',
    'G-Max Snooze',
    'G-Max Finale',
    'G-Max Steelsurge',
    'G-Max Depletion',
    'G-Max One Blow',
    'G-Max Rapid Flow',
];
