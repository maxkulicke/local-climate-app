import React, { useState, useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import FIPS from "../../utils/fips"
import {
  Form,
  Button,
  Card,
  Container,
  Row,
  Col
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FORM_SUBMIT
} from "../../utils/actions"

function SearchInputForm() {
  const [state, dispatch] = useStoreContext();
  const [formObject, setFormObject] = useState({})
  const [stateList, setStateList] = useState(Object.keys(FIPS))
  const [countyShow, setCountyShow] = useState(false);
  const [rangeShow, setRangeShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formObject.range);
    if (formObject.county && formObject.range) {
      let { county, range } = formObject
      dispatch({
        type: FORM_SUBMIT,
        county: county,
        range: range
      });
    } else {
      alert("you must have a county selected")
    }
  }
  const optionMaker = (array) => {
    return array.map((item) => {
      item = item.replace(/_/g, " ");
      return (
        <option>{item}</option>
      )
    });
  }

  const countyFinder = () => {
    return Object.keys(FIPS[formObject.state]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "state") {
      setCountyShow(true)
    }
    if (name === "county") {
      setRangeShow(true)
    }
    setFormObject({ ...formObject, [name]: value });
  }

  const countyForm = () => {
    let countyForm = (
      countyShow ?
        <Form.Control as="select" placeholder="county" name="county" onChange={handleInputChange}>
          <option>county...</option>
          {formObject.state ? optionMaker(countyFinder()) : ""}
        </Form.Control>
        : "");
    return countyForm;
  }

  const rangeForm = () => {
    let rangeForm = (
      rangeShow ?
        <Form.Group controlId="yearForm">
          <Form.Label>How far back would you like to search?</Form.Label>
          <Form.Text className="text-muted">
            The farther back the search, the easier it is to determine long term trends
          </Form.Text>
          <Form.Control as="select" name="range" onChange={handleInputChange} >
            <option>Choose...</option>
            <option>5 years</option>
            <option>10 years</option>
            <option>15 years</option>
            <option>20 years</option>
            <option>25 years</option>
            <option>30 years</option>
            <option>35 years</option>
            <option>40 years</option>
            <option>45 years</option>
            <option>50 years</option>
            <option>55 years</option>
            <option>60 years</option>
            <option>65 years</option>
            <option>70 years</option>
            <option>75 years</option>
          </Form.Control>
        </Form.Group>
        : "");
    return rangeForm;
  }

  return (
    <div>
      <Form>
        <Form.Group controlId="zipForm">
          <Form.Label>Please select a state and a county</Form.Label>
          {/* <Form.Label>Example select</Form.Label> */}
          <Form.Control as="select" placeholder="state" name="state" onChange={handleInputChange}>
            <option>state...</option>
            {optionMaker(stateList)}
          </Form.Control>
        </Form.Group>
          {countyForm()}

        {rangeForm()}
        {/* <Form.Group show={rangeShow} controlId="yearForm">
          <Form.Label>How far back would you like to search?</Form.Label>
          <Form.Text className="text-muted">
            The farther back the search, the easier it is to determine long term trends
    </Form.Text>

          <Form.Control as="select" name="range" onChange={handleInputChange} >
            <option>Choose...</option>
            <option>5 years</option>
            <option>10 years</option>
            <option>15 years</option>
            <option>20 years</option>
            <option>25 years</option>
            <option>30 years</option>
            <option>35 years</option>
            <option>40 years</option>
            <option>45 years</option>
            <option>50 years</option>
            <option>55 years</option>
            <option>60 years</option>
            <option>65 years</option>
            <option>70 years</option>
            <option>75 years</option>
          </Form.Control>
        </Form.Group> */}
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Search
  </Button>
      </Form>
    </div>
  );
}

export default SearchInputForm;
