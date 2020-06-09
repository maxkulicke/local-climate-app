import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import {
  Modal,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function LoadingModal() {
  const [state, dispatch] = useStoreContext();
  const { loading } = state;

  const [show, setShow] = useState(false);

  const closeModal = () => setShow(false);
  const showModal = () => setShow(true);

  useEffect(() => {
    if (loading) {
      showModal();
   } else {
     closeModal();
   }
  }, [loading]);

  return (
    <>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Loading</Modal.Title>
        </Modal.Header>
        <Modal.Body>We're grabbing your data and crunching some numbers....</Modal.Body>
      </Modal>
    </>
  );
}

export default LoadingModal;
