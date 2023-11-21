import React, { useState } from 'preact/compat';
import TemplateData from 'components/trainer-card-preview/TemplateData';
import { getPokemonImage } from 'modules/Constants';
import States from 'modules/States';
import PropTypes from 'prop-types';

function handleShow(slotID) {
    //setShow(true);
    States.modal.pokemonListModal.value = true;
    States.modal.pokemonSlotID = slotID;
}

export default function GeneratePokemonSlot(props) {
    const pokemon = TemplateData.slotList[props.slotID];
    const [src, setSrc] = useState('');
    setSrc(getPokemonImage(pokemon.id, pokemon.shiny, pokemon.female));

    return <div
        className={`d-block p-0 signature-slot ${!props.isTemplate ? 'pokemon-btn btn btn-light mx-auto' : 'bg-white'}`}
        {...(!props.isTemplate && { onClick: () => handleShow(props.slotID) })}
        style={{width: props.baseSize, height: props.baseSize, margin: props.isTemplate ? '0 1px' : ''}}
    >
        <img src={src}
            style={{width: props.baseSize, padding: 10, opacity: (!props.isTemplate && pokemon.id === 0) ? 0 : 1}} />
    </div>;
}

GeneratePokemonSlot.propTypes = {
    slotID: PropTypes.number.isRequired,
    baseSize: PropTypes.number.isRequired,
    isTemplate: PropTypes.bool,
};
GeneratePokemonSlot.defaultProps = {
    isTemplate: false,
};
