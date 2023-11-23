export default class PokemonData {
    constructor (
        public id: number,
        public name: string,
        public genderDifferences: boolean,
        public prettyName: string,
        public types: {
            // Make type enum
            primary: string,
            secondary: string
        }
    ) {

    }
}
