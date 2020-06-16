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
  let { chart, data, restart, stateOfUnion, county } = state;
  const [chartSection, setChartSection] = useState([]);
  const [buttonShow, setButtonShow] = useState(false);


  const chartSectionMaker = (data) => {
    setChartSection(Object.keys(data).map((set) => {
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

  const locationBuddy = () => {
    let location = (
      buttonShow ?
        <>
          <br />
          <h3>Data for {county}, {stateOfUnion}:</h3>
        </>
        : "");
    return location;
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
      <br />
      <br />
      <Row>
        <Col>
          {locationBuddy()}
        </Col>
      </Row>
      <Row>
        <Col>
          {chartSection}
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <ErrorList />
      </Row>
    </Container>
  )
}

export default ChartSection;
