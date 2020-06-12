import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import FIPS from "../../utils/fips"
import DataSetsForm from "../DataSetsForm";
import {
  Form,
  Button,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FORM_SUBMIT
} from "../../utils/actions"

function SearchInputForm() {
  const [state, dispatch] = useStoreContext();
  let { chart } = state;
  const [formObject, setFormObject] = useState({})
  const [stateList, setStateList] = useState(Object.keys(FIPS))
  const [countyShow, setCountyShow] = useState(false);
  const [rangeShow, setRangeShow] = useState(false);
  const [buttonShow, setButtonShow] = useState(false);
  const [dataFormShow, setDataFormShow] = useState(false);
  const [searchShow, setSearchShow] = useState(true);


  const handleSubmit = (event) => {
    event.preventDefault();
    let { state, county, range } = formObject
    county = county.replace(/ /g, "_");
    state = state.replace(/ /g, "_");
    let fips = FIPS[state][county];
    dispatch({
      type: FORM_SUBMIT,
      fips: fips,
      range: range
    });
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
    let stateString = formObject.state.replace(/ /g, "_")
    return Object.keys(FIPS[stateString]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "state") {
      setCountyShow(true)
    }
    if (name === "county") {
      setRangeShow(true)
    }
    if (name === "range") {
      setButtonShow(true);
      setDataFormShow(true);
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
          </Form.Control>
        </Form.Group>
        : "");
    return rangeForm;
  }

  const dataForm = () => {
    let dataForm = (
      dataFormShow ?
        <DataSetsForm />
        : "");
    return dataForm;
  }

  const buttonBuddy = () => {
    let button = (
      buttonShow ?
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Search
      </Button>
        : "");
    return button;
  }

  useEffect(() => {
    if (chart) {
      setSearchShow(false);
    }
  }, [chart]);

  return (
    (searchShow ?
      <div>
        <Form>
          <Form.Group controlId="zipForm">
            <Form.Label>Please select a state to begin</Form.Label>
            <Form.Control as="select" placeholder="state" name="state" onChange={handleInputChange}>
              <option>state...</option>
              {optionMaker(stateList)}
            </Form.Control>
          </Form.Group>
          {countyForm()}
          {rangeForm()}
          {dataForm()}
          {buttonBuddy()}
        </Form>
      </div>
      : "")
  );
}

export default SearchInputForm;
