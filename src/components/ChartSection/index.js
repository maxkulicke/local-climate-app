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
  const [chartSection, setChartSection] = useState([]);
  // const [charts, setCharts] = useState([]);

  const chartSectionMaker = (data) => {
    console.log(data)
    setChartSection(Object.keys(data).map((set) => {
      console.log(data[set].name);
      let charts = chartMaker(data[set].data)
      return (
        <Container fluid>
          <h3>{set}</h3>
          <Row>
            <Col>
              {charts}
            </Col>
          </Row>
        </Container>
      )
    }));
  }

  const chartMaker = (data) => {
    let charts = Object.keys(data).map((set) => {
      return (
        <Chart
          name={set}
          data={data[set]} />
      )
    });
    return charts;
  }

  useEffect(() => {
    if (chart) {
      chartSectionMaker(data);
    }
    dispatch({
      type: CHART,
    });
  }, [chart]);

  return (
    <Container fluid>
      <Row>
        <Col>
          {chartSection}
        </Col>
      </Row>
    </Container>
  )
}

export default ChartSection;
