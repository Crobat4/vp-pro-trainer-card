export default class PartyPokemon {
    shiny: boolean;
    female: boolean;
    formID: number;
    formName: string;

    constructor (
        public id: number
    ) {
        this.shiny = false;
        this.female = false;
        this.formID = 0;
        this.formName = '';
    }

    getPokemonFilename() {
        const stringID = this.id.toString();
        return stringID.padStart(4, '0');
    }
}
