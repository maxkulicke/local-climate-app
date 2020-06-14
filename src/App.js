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
import LoadingModal from "./components/LoadingModal"

function App() {
  return (
    <StoreProvider>
      <NOAACaller />
      <DataOrganizer />
      <Container fluid>
      <LoadingModal />
        <Row>
          <Col>
          <h1>Welcome to Max's Climate Data App</h1>
          <br />
          To Do:
          <br />
          different graph
          <br />
          more than 5 datasets
          <br />
          description / units of measurement for graph header
          <br />
          <br />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <SearchInputForm />
          </Col>
        </Row>
      </Container>
      <ChartSection />

    </StoreProvider>
  );
}

export default App;
