import React from 'preact/compat';
import { Modal, Button } from 'react-bootstrap';
import { spacesToDashesLowerCase } from 'src/modules/Utils';

type Props = {
    children: React.ReactNode,
    title: string,
    show: boolean,
    onClose: () => void,
    size?: 'lg' | 'sm' | 'xl',
    bodyClass?: string,
    closeText?: string,
}

function ModalTemplate({title, show, onClose, size = 'lg', bodyClass = '', closeText = 'Close'}: Props) {
    return (
        <Modal
            show={show}
            className={`${spacesToDashesLowerCase(title)}-modal`}
            onHide={onClose}
            scrollable={true}
            size={size}
        >
            <Modal.Header>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className={bodyClass}>
                {this.props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={onClose}>
                    {closeText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalTemplate;
