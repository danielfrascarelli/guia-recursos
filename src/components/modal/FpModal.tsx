import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

type ModalProps = {
  title: string;
  modalTitle?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

import woman from '../../assets/images/people/woman.svg';
import './fp-modal.scss';

export default function FpModal({
  title,
  modalTitle,
  onClick,
  children,
}: ModalProps) {
  const [show, setShow] = useState(false); // State to control modal visibility

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className='box-btn'
        onClick={() => {
          onClick ? onClick() : handleShow();
        }}
      >
        <div className='box-container'>
          <div className='box-title title-modal'>{title}</div>
          <div className='box-image-container'>
            <img src={woman} className='box-image' alt={`${title} logo`} />
          </div>
        </div>
      </button>

      <Modal show={show} onHide={handleClose} className='fp-modal'>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button className='fp-btn-modal' onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
