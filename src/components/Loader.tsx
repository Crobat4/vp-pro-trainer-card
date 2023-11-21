import React from 'preact/compat';
import States from 'modules/States';

export default function Loader() {
    if (States.pokemonList.value.length && States.moveList.value.length) {
        States.loadingState.value = false;
    }
    return <div className="loader-container bg-light"
        style={
            {
                opacity: !States.loadingState.value ? 0 : 1,
                zIndex: !States.loadingState.value ? -1 : 10,
            }
        }>
        <div className="position-relative">
            <div className="loader"></div>
            <div className="position-absolute loader-small">
                <div className="loader"></div>
            </div>
        </div>
        <div className="fw-bold p-1" style="font-size: 30px;">Loading...</div>
    </div>;
}
