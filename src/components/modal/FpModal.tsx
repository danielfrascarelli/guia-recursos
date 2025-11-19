import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

type ModalProps = {
  title: string;
  modalTitle?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

// import woman from '../../assets/images/people/woman.svg';
import black_boy from '../../assets/images/people/black_boy.svg';
import './fp-modal.scss';
import WomanBoxButton from '../box-buttons/woman-box-button/WomanBoxButton';

export default function FpModal({
  // title,
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
        <div className='mt-4 common-layout-margin-only-desktop centrar-div'>
          <WomanBoxButton className='fp-introduction-woman-card-btn' srcImg={black_boy}>
            <div className='fp-introduction-woman-card-content text-justify'>
              {/* <p> */}
                <strong>¡ Acompañar !</strong>
                {/* </p> */}
              {/* <p className="one-line-text">¿Qué significa acompañar?</p> */}
            </div>
          </WomanBoxButton>
        </div>
        {/* <div className='box-container'>
          <div className='box-title title-modal'>{title}</div>
          <div className='box-image-container'>
            <img src={black_boy} className='box-image' alt={`${title} logo`} />
          </div>
        </div> */}
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
