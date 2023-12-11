import React, { useState } from 'preact/compat';
import Select from 'react-select';
import Data from 'modules/Data';
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
            onInputChange={(e) => inputEntered(e)}
            onChange={(move) => {
                Data.move.value = move.label;
            }}
            options={moveSearchState.showOptions ? States.moveList.value : []}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    width: size, margin: 'auto',
                    backgroundColor: 'var(--bs-body-bg)',
                    borderColor: 'var(--bs-border-color)',
                }),
                singleValue: (baseStyles, state) => ({
                    ...baseStyles,
                    color: 'var(--bs-body-color)',
                }),
                indicatorSeparator: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: 'var(--bs-border-color)',
                }),
                menu: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: 'var(--bs-body-bg)',
                }),
                menuList: (baseStyles, state) => ({
                    ...baseStyles, maxHeight: 200,
                }),
                option: (baseStyles, state) => {
                    let optionBGColor;
                    if (state.isSelected) {
                        optionBGColor = 'var(--bs-primary)';
                    }
                    if (state.isFocused) {
                        optionBGColor = 'var(--bs-primary-bg-subtle)';
                    }
                    return {
                        ...baseStyles,
                        backgroundColor: optionBGColor,
                    };
                },
            }}
        />
    );
}

export default MoveSelect;
