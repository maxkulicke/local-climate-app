import React from 'react';
import './App.css';
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchInputForm from './components/SearchInputForm';
import DataSetsForm from "./components/DataSetsForm"

function App() {
  return (

    <div>
      <Container fluid>
        <Row>
          <Col>header will go here</Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
          <SearchInputForm />
          </Col>
          <Col>
          <DataSetsForm />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>some graph here</Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>some graph here</Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>some graph here</Col>
        </Row>
      </Container>
    
    </div>
  );
}

export default App;
