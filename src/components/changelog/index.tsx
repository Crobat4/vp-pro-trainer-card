import React, { useState } from 'preact/compat';
import { Modal, Button } from 'react-bootstrap';
import FullChangelog from 'components/changelog/FullChangelog';

type Props = {
    show: boolean,
    onClose: () => void,
}

function ChangelogModal({ show, onClose }: Props) {

    return (
        <Modal
            show={show}
            className='changelog-modal'
            onHide={onClose}
            scrollable={true}
            size='lg'
        >
            <Modal.Header>
                <Modal.Title>Changelog</Modal.Title>
            </Modal.Header>
            <Modal.Body className={'p-0'}>
                <FullChangelog />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ChangelogModal;
