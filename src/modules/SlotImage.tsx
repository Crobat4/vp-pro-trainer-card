import React, { useState } from 'preact/compat';
import TemplateData from 'components/trainer-card-preview/TemplateData';
import { getPokemonImage } from 'modules/Constants';
type Props = {
    slotID: number,
    baseSize: number,
    isTemplate?: boolean,
}

function SlotImage({ slotID, baseSize, isTemplate = false }: Props) {
    const pokemon = TemplateData.slotList[slotID];
    const [src, setSrc] = useState('');
    setSrc(getPokemonImage(pokemon.id, pokemon.shiny, pokemon.female));

    return (
        <img src={src}
            style={{width: baseSize, padding: 10, opacity: (!isTemplate && pokemon.id === 0) ? 0 : 1}} />
    );
}
export default SlotImage;
