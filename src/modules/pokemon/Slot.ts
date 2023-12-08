import PartyPokemon from 'modules/pokemon/PartyPokemon';

export default class Slot {
    constructor(
        public id: number,
        public pokemon: PartyPokemon
    ) {

    }
}
