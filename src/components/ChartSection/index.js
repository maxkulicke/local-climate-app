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
import ErrorList from "../ErrorList"
import { CHART, NEW_SEARCH } from "../../utils/actions"

function ChartSection() {
  const [state, dispatch] = useStoreContext();
  let { chart, data, restart } = state;
  const [chartSection, setChartSection] = useState([]);
  const [buttonShow, setButtonShow] = useState(false);

  // const [charts, setCharts] = useState([]);

  const chartSectionMaker = (data) => {
    // console.log(data)
    setChartSection(Object.keys(data).map((set) => {
      // console.log(data[set]);
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

  const buttonBuddy = () => {
    let button = (
      buttonShow ?
        <Button variant="primary" type="submit" onClick={handleClick}>
          Make another search
      </Button>
        : "");
    return button;
  }

  const handleClick = () => {
    dispatch({
      type: NEW_SEARCH,
    });
  }

  useEffect(() => {
    if (chart) {
      chartSectionMaker(data);
      setButtonShow(true);
    } else {
      // chartSectionMaker([]);
      // setButtonShow(false);
    }
    dispatch({
      type: CHART,
    });
  }, [chart]);

  useEffect(() => {
    if (restart) {
      chartSectionMaker([]);
      setButtonShow(false);
    }
  }, [restart]);

  return (
    <Container fluid>
      {buttonBuddy()}
      <ErrorList />
      <Row>
        <Col>
          {chartSection}
        </Col>
      </Row>
    </Container>
  )
}

export default ChartSection;
