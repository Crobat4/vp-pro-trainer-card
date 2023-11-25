import React, { useState } from 'preact/compat';
import TemplateModal from 'components/trainer-card-preview/TemplateModal';
import States from 'modules/States';
import Theme from 'components/home/general-info/Theme';
import TypeSelect from 'components/home/general-info/TypeSelect';
import SignaturePokemon from 'components/home/general-info/SignaturePokemon';
import MoveSelect from 'components/home/general-info/MoveSelect';
import BadgeImage from 'components/home/general-info/BadgeImage';

function GeneralInfo() {
    const signatureSize = 180;
    // Initialize slots count
    States.count = 0;
    return (
        <div className="row">
            <div className="col-6">
                <TypeSelect />
            </div>
            <div className="col-6">
                <Theme />
            </div>
            <div className="col-6 signature-img-container">
                <SignaturePokemon size={signatureSize} />
                <MoveSelect size={signatureSize} />
            </div>
            <div className="col-6">
                <BadgeImage size={signatureSize} />
                <TemplateModal />
            </div>
        </div>
    );
}

export default GeneralInfo;
