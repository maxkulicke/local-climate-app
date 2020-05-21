import React from 'react';
import { StoreProvider } from "./utils/GlobalState";
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
import DataSetsForm from "./components/DataSetsForm";
import NOAACaller from "./components/NOAACaller";
import Chart from "./components/Chart";

function App() {
  return (
    <StoreProvider>
      <NOAACaller />
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
          <Col>
            <Chart />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Chart />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Chart />
          </Col>
        </Row>
      </Container>

    </StoreProvider>
  );
}

export default App;
