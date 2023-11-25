import React, { useState } from 'preact/compat';
import Select from 'react-select';
import TemplateData from 'components/trainer-card-preview/TemplateData';
import States from 'modules/States';

type Props = {
    size: number,
}
function MoveSelect({ size }: Props) {
    const [moveSearchState, setMoveSearchState] = useState({ value: '', showOptions: false, noResultsMessage: 'Type 2 more characters' });

    function inputEntered(inputText) {
        const inputMinCharacters = 2;
        if (inputText.length >= inputMinCharacters) {
            setMoveSearchState({ ...moveSearchState, showOptions: true, noResultsMessage: (inputMinCharacters - inputText.length) <= 0 ? 'No results' : '' });
        } else {
            setMoveSearchState({ ...moveSearchState, showOptions: false, noResultsMessage: (inputMinCharacters - inputText.length) === 1 ? 'Type 1 more character' : `Type ${(inputMinCharacters - inputText.length)} more characters` });
        }
    }
    return (
        <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={{ value: null, label: 'Search move...' }}
            name="color"
            isDisabled={!States.moveList.value.length}
            noOptionsMessage={() => moveSearchState.noResultsMessage}
            isSearchable={true}
            styles={{control: (base) => ({...base, width: size, margin: 'auto'}), menuList: (base) => ({...base, maxHeight: 200})}}
            onInputChange={(e) => inputEntered(e)}
            onChange={(move) => {
                TemplateData.move.value = move.label;
            }}
            options={moveSearchState.showOptions ? States.moveList.value : []}
        />
    );
}

export default MoveSelect;
