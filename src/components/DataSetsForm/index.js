import React, { useState, useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import {
  InputGroup,
  Form,
  FormControl,
  Button,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  SETS_CHANGE
} from "../../utils/actions"
import dataSets from "../../utils/dataSets"

function DataSetsForm() {
  const [state, dispatch] = useStoreContext();

  const [sets, setSets] = useState({
    temperature: false,
    precipitation: false,
    average: false,
    extreme: false,
  })

  const descriptions = [
    {
      id: "temperature",
      name: "Temperature",
      description: "information about the temperature ranges & conditions"
    },
    {
      id: "precipitation",
      name: "Precipitation",
      description: "information about precipitation trends, including rainfall & snowfall"
    },
    {
      id: "average",
      name: "Average ",
      description: "information about average weather conditions"
    },
    {
      id: "extreme",
      name: "Extreme",
      description: "information about extreme weather conditions & events"
    }
  ]

  const refs = [];
  const temperatureRef = useRef(null);
  const precipitationRef = useRef(null);
  const averageRef = useRef(null);
  const extremeRef = useRef(null);

  refs.push(
    temperatureRef,
    precipitationRef,
    averageRef,
    extremeRef
  );

  const handleChange = (event) => {
    for (const ref of refs) {
      let { id, checked } = ref.current;
      id = id.replace(/-/g, "");
      sets[id] = checked;
    }
    dispatch({
      type: SETS_CHANGE,
      sets: sets
    });
  }

  const makeCheckboxes = () => {
    let checkboxes = Object.keys(sets).map((set, index) => {
      // console.log(set)
      let descriptionString =
        `${descriptions[index].name}: ${descriptions[index].description}`;
      return (
        <Form.Group controlId={set}>
          <Form.Check
            type="checkbox"
            ref={refs[index]}
            label={descriptionString}
            onChange={handleChange}
          />
        </Form.Group>
      )
    })
    return checkboxes
  }

  let checkboxArray = makeCheckboxes();

  return (
    <Form>
      <p>Select the data groups you are interested in</p>
      <Row>
        <Col>
          {checkboxArray[0]}
          {checkboxArray[1]}
        </Col>
        <Col>
          {checkboxArray[2]}
          {checkboxArray[3]}
        </Col>
      </Row>
    </Form>
  );
}

export default DataSetsForm;
