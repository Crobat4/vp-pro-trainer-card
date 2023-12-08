import React from 'preact/compat';
import Data from 'modules/Data';
import { TypeColors } from 'modules/Constants';

function SignatureTitle() {
    return (
        <div className="align-center fw-bold signature-title" style={{ color: TypeColors[Data.type.value].darker }}>
            Signature PKMN
        </div>
    );
}

export default SignatureTitle;
