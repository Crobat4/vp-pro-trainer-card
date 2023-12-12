import React, { useState } from 'preact/compat';
import PreviewModal from 'components/trainer-card-preview/PreviewModal';
import Theme from 'components/home/general-info/Theme';
import TypeSelect from 'components/home/general-info/TypeSelect';
import SignaturePokemon from 'components/home/general-info/signature/SignaturePokemon';
import MoveSelect from 'components/home/general-info/MoveSelect';
import BadgeImage from 'components/home/general-info/badge/BadgeImage';

function GeneralInfo() {
    const signatureSize = 180;
    // Initialize slots count
    return (
        <div className="row" style={{ marginBottom: 8 }}>
            <div className="col-md-6 col-12" style={{ marginBottom: 8 }}>
                <TypeSelect />
            </div>
            <div className="col-md-6 col-12" style={{ marginBottom: 8 }}>
                <Theme />
            </div>
            <div className="col-md-6 col-12 signature-img-container">
                <SignaturePokemon size={signatureSize} />
                <MoveSelect size={signatureSize} />
            </div>
            <div className="col-md-6 col-12">
                <BadgeImage size={signatureSize} />
                <PreviewModal />
            </div>
        </div>
    );
}

export default GeneralInfo;
