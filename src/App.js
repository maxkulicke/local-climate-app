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

// TO DO:

// styling

// description / units of measurement for graph header

function App() {
  return (
    <StoreProvider>
      <NOAACaller />
      <DataOrganizer />
      <Container fluid>
        <LoadingModal />
        <Row >
          <Col />
          <Col md={8} className="App">
            <h1>Welcome to Max's Climate Data App</h1>
            <br />
            <h5>
            This app is designed to let a user visualize long term weather patterns and trends for
          any county in the United States. Given the onset of local manifestations of global 
          climate change, and the abundance of public data available through NOAA, the National
          Oceanic and Atmospheric Administration, this app helps a user process and understand
          that data for whatever purpose they may want.
            </h5>
            <br />
            <AboutModal />
            <br />
            <br />
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
