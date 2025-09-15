import React, { useState } from "react";
import { Modal, Button } from 'react-bootstrap';

type ModalProps = {
  title: string;
  modalTitle: string;
  children: React.ReactNode;
};

export default function FpModal({
  title,
  modalTitle,
  children,
}: ModalProps) {
  const [show, setShow] = useState(false); // State to control modal visibility

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <>
      <Button variant="primary" onClick={handleShow}>
        {title}
      </Button>

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