import React from 'preact/compat';
import Select from 'react-select';
import TemplateData from 'components/trainer-card-preview/TemplateData';
import { generateTypeSelect } from 'modules/Constants';

function TypeSelect() {
    return (
        <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={generateTypeSelect()[0]}
            name="color"
            isSearchable={false}
            onChange={(type) => {
                TemplateData.type.value = type.value;
            }}
            options={generateTypeSelect()}
        />
    );
}

export default TypeSelect;
