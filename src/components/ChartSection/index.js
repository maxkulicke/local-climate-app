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
import Chart from "../Chart"

function ChartSection() {
  const [state, dispatch] = useStoreContext();

  return (
    <Container fluid>
      <Row>
        <Col>
          <Chart />
        </Col>
      </Row>
    </Container>
  )

}

export default ChartSection;
