import PartyPokemon from 'modules/pokemon/PartyPokemon';
import Slot from 'modules/pokemon/Slot';

export default class SlotGroup {
    slots: Slot[];

    constructor(
        public id: string,
        public badges: number,
        public quantity: number
    ) {
        this.slots = this.fillSlots();
    }

    fillSlots() {
        const newSlots = Array.from({length: this.quantity}, (v, k) => new Slot(k, new PartyPokemon(0)));
        //this.slots = [...this.slots, newSlots];
        return newSlots;
    }
}
