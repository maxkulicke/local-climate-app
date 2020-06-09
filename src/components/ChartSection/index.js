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
import { CHART } from "../../utils/actions"

function ChartSection() {
  const [state, dispatch] = useStoreContext();
  let { chart, data } = state;
  const [charts, setCharts] = useState([]);

  const chartMaker = (data) => {
    setCharts(Object.keys(data).map((set) => {
      return (
        <Chart 
        name={set}
        data={data[set]} />
      )
    }));
  }

  useEffect(() => {
    if (chart) {
      chartMaker(data);
    }
    dispatch({
      type: CHART,
    });
  }, [chart]);

  return (
    <Container fluid>
      <Row>
        <Col>
          {charts}
        </Col>
      </Row>
    </Container>
  )
}

export default ChartSection;
