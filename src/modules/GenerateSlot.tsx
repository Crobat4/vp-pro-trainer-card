import React, { useState } from 'preact/compat';
import TemplateData from 'components/trainer-card-preview/TemplateData';
import { getPokemonImage } from 'modules/Constants';
import States from 'modules/States';

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
    const pokemon = TemplateData.slotList[slotID];
    const [src, setSrc] = useState('');
    setSrc(getPokemonImage(pokemon.id, pokemon.shiny, pokemon.female));

    return <div
        className={`d-block p-0 signature-slot ${!isTemplate ? 'pokemon-btn btn btn-light mx-auto' : 'bg-white'}`}
        {...(!isTemplate && { onClick: () => handleShow(slotID) })}
        style={{width: baseSize, height: baseSize, margin: isTemplate ? '0 1px' : ''}}
    >
        <img src={src}
            style={{width: baseSize, padding: 10, opacity: (!isTemplate && pokemon.id === 0) ? 0 : 1}} />
    </div>;
}
