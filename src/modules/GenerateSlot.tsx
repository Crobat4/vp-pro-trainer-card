import React from 'preact/compat';
import States from 'modules/States';
import SlotImage from 'modules/SlotImage';

function handleShow(slotID) {
    //setShow(true);
    States.modal.pokemonListModal.value = true;
    States.modal.pokemonSlotID = slotID;
}

type Props = {
    slotID: number,
    baseSize: number,
    isTemplate?: boolean,
}
export default function GeneratePokemonSlot({ slotID, baseSize, isTemplate = false }: Props) {
    return <div
        className={`d-block p-0 signature-slot ${!isTemplate ? 'pokemon-btn btn btn-light mx-auto' : 'bg-white'}`}
        {...(!isTemplate && { onClick: () => handleShow(slotID) })}
        style={{width: baseSize, height: baseSize, margin: isTemplate ? '0 1px' : ''}}
    >
        <SlotImage slotID={slotID} baseSize={baseSize} isTemplate={isTemplate} />
    </div>;
}
