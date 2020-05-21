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
import ChartSection from "./components/ChartSection";
import DataOrganizer from "./components/DataOrganizer";

function App() {
  return (
    <StoreProvider>
      <NOAACaller />
      <DataOrganizer />
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
      <ChartSection />

    </StoreProvider>
  );
}

export default App;
