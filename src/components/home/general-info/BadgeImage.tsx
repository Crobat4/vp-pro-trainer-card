import React from 'preact/compat';
import TemplateData from 'components/trainer-card-preview/TemplateData';
import { TypeColors } from 'modules/Constants';

function openDialog() {
    document.getElementById('badge-file').click();
}

const handleChange = e => {
    TemplateData.badgeURL.value = URL.createObjectURL(e.target.files[0]);
};

type Props = {
    size: number,
}
function BadgeImage({ size }: Props) {
    return (
        <>
            <div className="align-center fw-bold badge-title" style={{ color: TypeColors[TemplateData.type.value].darker }}>Badge</div>
            <button id="badge-file-button" className="btn btn-light d-block mx-auto p-0 badge-img-container"
                style={{ width: size, height: size }} onClick={openDialog}>
                <img className={`badge-image ${TemplateData.badgeURL.value ? 'w-100' : ''}`} style={{}} src={TemplateData.badgeURL.value || ''} />
                <div className={'badge-file-button-bg'} style={{ backgroundImage: !TemplateData.badgeURL.value ? 'url("assets/icons/upload.svg")' : '' }}></div>
            </button>
            <input type="file" onChange={handleChange} accept={'image/*'} className="form-control" hidden id="badge-file" />
        </>
    );
}

export default BadgeImage;
