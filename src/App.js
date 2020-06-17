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
import LoadingModal from "./components/LoadingModal";
import AboutModal from "./components/AboutModal";

console.log(process.env.REACT_APP_API_KEY);
function App() {
  return (
    <StoreProvider>
      <NOAACaller />
      <DataOrganizer />
      <Container fluid>
        <LoadingModal />
        <Row >
          <Col>
            <h3>To Do:</h3>
            <br />
          styling
          <br />
          deploy
          <br />
          different graph
          <br />
          more than 5 datasets
          <br />
          description / units of measurement for graph header
          <br />
            <br />
          </Col>
          <Col md={8}>
            <h1>Welcome to Max's Climate Data App</h1>
            <br />
            <AboutModal />
          </Col>
          <Col />
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col />
          <Col md={10}>
            <SearchInputForm />
          </Col>
          <Col />
        </Row>
      </Container>
      <ChartSection />

    </StoreProvider>
  );
}

export default App;
