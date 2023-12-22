import React from 'preact/compat';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import States from 'modules/States';
import { getPokemonImage, sanitizeString } from 'modules/Utils';

type Props = {
    id: number,
    name: string, // Pretty name
    formID: number,
    formName: string, // Pretty name
    imgSrc: string,
    onClick: () => void,
}

function PokemonButton({ id, name, formID, formName, imgSrc, onClick }: Props) {
    const fullName = `${name} ${formName ? `(${formName})` : ''}`;
    return (
        <div className="col-6 col-md-4 col-lg-3 col-xl-2">
            <OverlayTrigger placement="bottom" flip={true} overlay={(props) => (
                <Tooltip id="button-tooltip" {...props} name={sanitizeString(fullName)}>
                    {fullName}
                </Tooltip>
            )}>
                <button className={`pokemon-btn btn btn-light d-block m-auto my-3 ${States.darkMode.value ? 'btn-dark' : 'btn-light'}`}
                    data-id={id}
                    onClick={onClick}>
                    <LazyLoadImage
                        className="gallery-img"
                        effect={'opacity'}
                        src={imgSrc}
                        width={'100%'}
                        wrapperClassName="gallery-img-wrapper"
                        threshold={200}
                    />
                </button>
            </OverlayTrigger>
        </div>
    );
}

export default PokemonButton;
