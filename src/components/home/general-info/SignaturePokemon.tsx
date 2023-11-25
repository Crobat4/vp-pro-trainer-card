import React, { useState } from 'preact/compat';
import TemplateData from 'components/trainer-card-preview/TemplateData';
import { TypeColors } from 'modules/Constants';
import GeneratePokemonSlot from 'modules/GenerateSlot';
import States from 'modules/States';

type Props = {
    size: number,
}
function SignaturePokemon({ size }: Props) {
    const [slotID, setSlotID] = useState(null);
    setSlotID(States.count);
    return (
        <>
            <div className="align-center fw-bold signature-title" style={{ color: TypeColors[TemplateData.type.value].darker }}>
                Signature PKMN
            </div>
            <GeneratePokemonSlot
                slotID={slotID}
                baseSize={size}
            />
        </>
    );
}

export default SignaturePokemon;
