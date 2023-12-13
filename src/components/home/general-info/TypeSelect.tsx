import React from 'preact/compat';
import Select from 'react-select';
import Data from 'modules/Data';
import { generateTypeSelect } from 'modules/Utils';

function TypeSelect() {
    return (
        <Select
            //defaultMenuIsOpen
            className="basic-single"
            classNamePrefix="select"
            defaultValue={generateTypeSelect()[0]}
            name="color"
            isSearchable={false}
            onChange={(type) => {
                Data.type.value = type.value;
            }}
            options={generateTypeSelect()}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
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
                        '&:active': { backgroundColor: 'var(--bs-primary-bg-subtle)' },
                    };
                },
            }}
        />
    );
}

export default TypeSelect;
