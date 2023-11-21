export default class PartyPokemon {
    shiny: boolean;
    female: boolean;

    constructor (
        public id: number
    ) {
        this.shiny = false;
        this.female = false;
    }

    getPokemonFilename() {
        const stringID = this.id.toString();
        return stringID.padStart(4, '0');
    }
}
