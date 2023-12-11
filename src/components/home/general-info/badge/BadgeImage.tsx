import React from 'preact/compat';
import Data from 'modules/Data';
import BadgeTitle from 'components/home/general-info/badge/BadgeTitle';
import States from 'modules/States';

function openDialog() {
    document.getElementById('badge-file').click();
}

const handleChange = e => {
    Data.badgeURL.value = URL.createObjectURL(e.target.files[0]);
};

type Props = {
    size: number,
}
function BadgeImage({ size }: Props) {
    const btnColor = States.darkMode.value ? 'btn-dark' : 'btn-light';
    return (
        <>
            <BadgeTitle />
            <button id="badge-file-button" className={`btn ${btnColor} d-block mx-auto p-0 badge-img-container`}
                style={{ width: size, height: size }} onClick={openDialog}>
                <img className={`badge-image ${Data.badgeURL.value ? 'w-100' : ''}`} style={{}} src={Data.badgeURL.value || ''} />
                <div className={'badge-file-button-bg'} style={{ backgroundImage: !Data.badgeURL.value ? 'url("assets/icons/upload.svg")' : '' }}></div>
            </button>
            <input type="file" onChange={handleChange} accept={'image/*'} className="form-control" hidden id="badge-file" />
        </>
    );
}

export default BadgeImage;
