import React from 'preact/compat';
import TemplateData from 'components/trainer-card-preview/TemplateData';
function Theme() {
    return (
        <div className="input-group">
            <span className="input-group-text" id="basic-addon3">Theme</span>
            <input type="text" value={TemplateData.theme.value} className="form-control" id="pkmn-theme" maxLength={30} placeholder="" onChange={(e) => {
                TemplateData.theme.value = (e.target as HTMLTextAreaElement).value;
            } } />
        </div>
    );
}
export default Theme;
