import React, { useState } from 'preact/compat';
import { getPokemonImage } from 'modules/Utils';
import Slot from 'modules/pokemon/Slot';
import States from 'modules/States';
type Props = {
    //slotID: number,
    baseSize: number,
    slot: Slot,
    isTemplate?: boolean,
}

function SlotImage({ baseSize, slot, isTemplate = false }: Props) {
    const pokemon = slot.pokemon;
    const [modalState, setModalState] = useState(false);
    setModalState(States.modal.pokemonListModal.value);
    return (
        <img className={'pokemon-image'} src={getPokemonImage(pokemon.id, pokemon.shiny, pokemon.female)}
            style={{width: '100%', height: 'auto', maxWidth: baseSize, maxHeight: baseSize, padding: '4%', opacity: (!isTemplate && pokemon.id === 0) ? 0 : 1}} />
    );
}
export default SlotImage;
