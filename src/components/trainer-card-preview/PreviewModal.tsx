import React from 'react';
import { useCallback, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TrainerCardPreview from 'components/trainer-card-preview';
import { toPng } from 'html-to-image';

function PreviewModal() {
    // Image download
    const downloadImage = useCallback(() => {
        const node = document.getElementById('trainer-card-preview-pkmn');
        toPng(node, { /*cacheBust: true,*/ pixelRatio: 2 })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'vp-pro-trainer-card.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.log(err);
            });
    }, null);

    // Modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="" style={{width: 180, backgroundColor: 'var(--bs-body-bg)'}} onClick={handleShow}>
                Generate Template
            </Button>

            <Modal show={show} onHide={handleClose} scrollable={true} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Trainer Card Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body className={'d-flex justify-content-lg-center'}>
                    <TrainerCardPreview />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={downloadImage}>
                        Download
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PreviewModal;
