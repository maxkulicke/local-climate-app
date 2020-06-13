import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import dataSets from "../../utils/dataSets";
import ErrorModal from "../ErrorModal"
import {
  Form,
  Button,
  ListGroup,
  FormControl,
  Card,
  Modal,
  Container,
  Row,
  Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchInputForm() {
  const [state, dispatch] = useStoreContext();
  let { errors, chart, restart } = state;
  let [errorsList, setErrorsList] = useState([]);
  let [showErrors, setShowErrors] = useState(false);

  const errorMaker = (array) => {
    findDuplicates(array);
    let errorArray = addDescriptions(array);
    setErrorsList(
      errorArray.map((item) => {
        return (
          <ListGroup.Item>{item}</ListGroup.Item>
        )
      })
    );
  }

  const findDuplicates = (array) => {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] === array[j]) {
          array.splice(j);
        }
      }
    }
  }

  const addDescriptions = (errorArray) => {
    let descriptions = []
    for (const error of errorArray) {
      for (const errorObject of dataSets) {
        if (error === errorObject.id) {
          const describedError = `${error}: ${errorObject.name}`
          descriptions.push(describedError);
        }
      }
    }
    return descriptions;
  }

  useEffect(() => {
    if (chart) {
      setShowErrors(true);
      errorMaker(errors)
    }
  }, [chart]);

  useEffect(() => {
    if (restart) {
      setShowErrors(false);
    }
  }, [restart]);

  return (
    (showErrors ?
      <Container>
        <Row>
          <Col>
            <ListGroup variant="flush">
              <h5><b>The following data sets returned errors from the NOAA database:</b></h5>
              {errorsList}
            </ListGroup>
          </Col>
          <Col>
            <ErrorModal />
          </Col>
        </Row>
      </Container>
      : "")
  );
}

export default SearchInputForm;
