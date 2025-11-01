import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

type ModalProps = {
  title: string;
  modalTitle?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};


import woman from "../../assets/images/people/woman.svg";
import "./fp-modal.scss";

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
      <button className="box-btn" onClick={() => { onClick ? onClick() : handleShow() }}>
        <div className="box-container">
          <div className="box-title">
            {title}
          </div>
          <div className="box-image-container">
            <img src={woman} className="box-image" alt={`${title} logo`} />
          </div>
        </div>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {children}
          {/* Woohoo, you're reading this text in a modal! */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
} 