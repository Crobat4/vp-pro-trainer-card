import React from 'preact/compat';
import States from 'modules/States';
import SlotImage from 'components/shared/SlotImage';
import Slot from 'modules/pokemon/Slot';

function handleShow(slot) {
    //setShow(true);
    States.modal.pokemonListModal.value = true;
    States.modal.pokemonSlot = slot;
}

type Props = {
    //slotID: number,
    baseSize: number,
    slot: Slot,
    isTemplate?: boolean,
}
export default function GeneratePokemonSlot({ baseSize, slot, isTemplate = false }: Props) {
    return <div
        className={`d-block p-0 signature-slot ${!isTemplate ? 'pokemon-btn btn btn-light mx-auto' : 'bg-white'}`}
        {...(!isTemplate && { onClick: () => handleShow(slot) })}
        style={{width: baseSize, height: baseSize, margin: isTemplate ? '0 1px' : ''}}
    >
        <SlotImage baseSize={baseSize} slot={slot} isTemplate={isTemplate} />
    </div>;
}
