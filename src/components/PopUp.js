import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import React from "react";

export const PopUp = ({ show, onHide, videoUrl }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Press play to watch the demo - this video has sound
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <video classname="video" width="100%" controls>
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
