import React from 'preact/compat';
import Data from 'modules/Data';
import GeneratePokemonSlot from 'components/shared/GeneratePokemonSlot';
import SlotGroup from 'modules/pokemon/SlotGroup';
import SignatureTitle from 'components/home/general-info/signature/SignatureTitle';

type Props = {
    size: number,
}
function SignaturePokemon({ size }: Props) {
    //const [slotID, setSlotID] = useState(null);
    //setSlotID(States.count);
    const signatureID = 'signature';
    if (!Data.slotsPerBadge[signatureID]) {
        const signature = new SlotGroup('signature', 0, 1);
        Data.slotsPerBadge[signature.id] = signature;
    }

    return (
        <>
            <SignatureTitle />
            <GeneratePokemonSlot
                //slotID={slotID}
                baseSize={size}
                slot={Data.slotsPerBadge.signature.slots[0]}
            />
        </>
    );
}

export default SignaturePokemon;
