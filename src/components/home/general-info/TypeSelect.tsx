import React from 'preact/compat';
import Select from 'react-select';
import Data from 'modules/Data';
import { generateTypeSelect } from 'modules/Utils';

function TypeSelect() {
    return (
        <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={generateTypeSelect()[0]}
            name="color"
            isSearchable={false}
            onChange={(type) => {
                Data.type.value = type.value;
            }}
            options={generateTypeSelect()}
        />
    );
}

export default TypeSelect;
