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
    const btnColor = States.darkMode.value ? 'btn-dark' : 'btn-light';
    return <div
        className={`d-flex align-items-center justify-content-center p-0 pokemon-slot-button signature-slot ${!isTemplate ? `pokemon-btn btn ${btnColor}` : 'bg-white'}`}
        {...(!isTemplate && { onClick: () => handleShow(slot) })}
        style={{width: baseSize, flex: `0 0 ${baseSize}px`, height: baseSize, margin: isTemplate ? '0 1px' : ''}}
    >
        <SlotImage baseSize={baseSize} slot={slot} isTemplate={isTemplate} />
    </div>;
}
