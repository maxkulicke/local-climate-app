import React, { useState, useRef, useEffect } from "react";
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
  let { chart, data } = state;

  const chartMaker = (data) => {
    let charts = [];
    //tbd start here
  }

  useEffect(() => {
    if (chart) {
      chartMaker(data);
    }
  }, [chart]);

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