import React from 'react';
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchInputForm() {

  const handleSubmit = () => {

  }
  
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Please enter your zip code</Form.Label>
          <Form.Control placeholder="zip code" />
          <Form.Text className="text-muted">
            We save no data on our users
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>How far would you like to search</Form.Label>
          <Form.Text className="text-muted">
            The farther back the search, the easier it is to determine long term trends
    </Form.Text>

          <Form.Control as="select" value="Choose...">
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
        <Button variant="primary" type="submit" onclick={handleSubmit}>
          Submit
  </Button>
      </Form>
    </div>
  );
}

export default SearchInputForm;
