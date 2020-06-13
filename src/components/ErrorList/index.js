import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import {
  Form,
  Button,
  ListGroup,
  FormControl,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchInputForm() {
  const [state, dispatch] = useStoreContext();
  let { errors } = state;
  let [errorsList, setErrorsList] = useState([]);

  const errorMaker = (array) => {
    setErrorsList(
      array.map((item) => {
        return (
          <ListGroup.Item>{item}</ListGroup.Item>
        )
      })
    );
    console.log(errorsList)
  }


  // const dataForm = () => {
  //   let dataForm = (
  //     dataFormShow ?
  //       <DataSetsForm />
  //       : "");
  //   return dataForm;
  // }

  // const buttonBuddy = () => {
  //   let button = (
  //     buttonShow ?
  //       <Button variant="primary" type="submit" onClick={handleSubmit}>
  //         Search
  //     </Button>
  //       : "");
  //   return button;
  // }

  useEffect(() => {
    console.log(errors)
    errorMaker(errors)
  }, [errors]);

  // useEffect(() => {
  //   setErrorsList(errors)
  // }, [errors]);

  return (
    <ListGroup variant="flush">
      <p>the following data sets returned errors from the NOAA database:</p>
      {errorsList}
    </ListGroup>
  );
}

export default SearchInputForm;
