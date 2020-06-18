import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import {
  Modal,
  Button
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutModal() {
  const [state, dispatch] = useStoreContext();
  const { loading } = state;

  const [show, setShow] = useState(false);

  const closeAboutModal = () => setShow(false);
  const showAboutModal = () => setShow(true);

  // useEffect(() => {
  //   if (loading) {
  //     showAboutModal();
  //   } else {
  //     closeAboutModal();
  //   }
  // }, [loading]);

  return (
    <>
      <Button variant="info" onClick={showAboutModal}>
        Learn More
      </Button>
      <Modal show={show} onHide={closeAboutModal}>
        <Modal.Header closeButton>
          <Modal.Title>About this app:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Methodology</h5>
          The county is the most micro area for which there is consistently available data across
          the country. I would have liked to do it at the zip code level, but data is too intermittent.
          Weather and climate data is reported by weather stations within the county. In cases where 
          there are multiple weather stations reporting data for a given time period, I average those
          data to produce a single statistic, for ease of graphing.
          <br />
          <br />
          <h5>Limitations</h5>
          The data is very inconsistent across the country. While certain counties and states tend to
          have robust data sets that go back decades, some have large gaps in their data sets, or are 
          missing categories entirely. Because there are thousands of counties in the country, I haven't
          the time to go through and probe each set and customize the data calls for each area. This results
          in a little bit of a grab bag experience for the user.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AboutModal;
