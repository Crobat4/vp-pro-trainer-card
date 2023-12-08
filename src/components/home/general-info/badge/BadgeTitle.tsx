import React from 'preact/compat';
import Data from 'modules/Data';
import { TypeColors } from 'modules/Constants';

function BadgeTitle() {
    return (
        <div className="align-center fw-bold badge-title" style={{ color: TypeColors[Data.type.value].darker }}>Badge</div>
    );
}

export default BadgeTitle;
