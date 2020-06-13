import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import {
  Modal,
  Button
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function ErrorModal() {
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
      <Button variant="danger" onClick={showModal}>
        Why did I get these errors?
      </Button>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Errors</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          The NOAA database where this app gets its data is rather temperamental.
          The errors usually occur because that data set simply doesn't exist for the
          location you have chosen, or doesn't go far enough back to satisfy the search
          range you have specified.
          <br />
          <br />
          On rare occasions the errors are returned because NOAA is down for service, or
          because it is experiencing a high volume of API requests.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ErrorModal;
