import React from 'react';
import {
  InputGroup,
  Form,
  FormControl,
  Button,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function DataSetsForm() {
  return (
    <div>
      data sets
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup>
  <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup>
</div>
  );
}

export default DataSetsForm
;
