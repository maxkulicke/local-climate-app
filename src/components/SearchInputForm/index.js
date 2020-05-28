import React, { useState, useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FORM_SUBMIT
} from "../../utils/actions"

function SearchInputForm() {
  const [state, dispatch] = useStoreContext();
  const [formObject, setFormObject] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();
    let { zip, range } = formObject
    dispatch({
      type: FORM_SUBMIT,
      zip: zip,
      range: range
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="zipForm">
          <Form.Label>Please enter your zip code</Form.Label>
          <Form.Control placeholder="zip code" name="zip" onChange={handleInputChange} />
          <Form.Text className="text-muted">
            We save no data on our users
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="yearForm">
          <Form.Label>How far back would you like to search?</Form.Label>
          <Form.Text className="text-muted">
            The farther back the search, the easier it is to determine long term trends
    </Form.Text>

          <Form.Control as="select" name="range" onChange={handleInputChange} >
            <option>Choose...</option>
            <option>5 years</option>
            <option>10 years</option>
            <option>15 years</option>
            <option>20 years</option>
            <option>25 years</option>
            <option>30 years</option>
            <option>35 years</option>
            <option>40 years</option>
            <option>45 years</option>
            <option>50 years</option>
            <option>55 years</option>
            <option>60 years</option>
            <option>65 years</option>
            <option>70 years</option>
            <option>75 years</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Search
  </Button>
      </Form>
    </div>
  );
}

export default SearchInputForm;
