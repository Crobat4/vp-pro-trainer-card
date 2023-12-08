import React from 'preact/compat';
import { TypeColors } from 'modules/Constants';
import Data from 'modules/Data';

type Props = {
    content?: React.JSX.Element;
}
function TeamTitle({ content }: Props) {
    return (
        <div className="d-flex align-items-center justify-content-center gym-leader-title-container"
            style={{ backgroundColor: TypeColors[Data.type.value].darker }}>
            {content}
        </div>
    );
}

export default TeamTitle;
