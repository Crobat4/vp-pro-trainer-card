import React from 'preact/compat';
import Data from 'modules/Data';
function Theme() {
    return (
        <div className="input-group">
            <span className="input-group-text" id="basic-addon3">Theme</span>
            <input type="text" value={Data.theme.value} className="form-control" id="pkmn-theme" maxLength={30} placeholder="" onChange={(e) => {
                Data.theme.value = (e.target as HTMLTextAreaElement).value;
            } } />
        </div>
    );
}
export default Theme;
