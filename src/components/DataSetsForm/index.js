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
    TAVG: false,
    TMAX: false,
    TMIN: false,
    LTMN: false,
    HTMN: false,
    LTMX: false,
    HTMX: false,
    HLYHIDXNORMAL: false,
    HLYWCHLNORMAL: false,
    HPCP: false,
    PRCP: false,
    TPCP: false,
    TSNW: false,
    PTA: false,
    HSNW: false,
    EMXP: false,
    EMSN: false,
    DWPR: false,
    ACSH: false,
    AWND: false,
    WSFM: false,
  })

  const refs = [];
  const TAVGRef = useRef(null);
  const TMAXRef = useRef(null);
  const TMINRef = useRef(null);
  const LTMNRef = useRef(null);
  const HTMNRef = useRef(null);
  const LTMXRef = useRef(null);
  const HTMXRef = useRef(null);
  const HLYHIDXNORMALRef = useRef(null);
  const HLYWCHLNORMALRef = useRef(null);
  const HPCPRef = useRef(null);
  const PRCPRef = useRef(null);
  const TPCPRef = useRef(null);
  const TSNWRef = useRef(null);
  const PTARef = useRef(null);
  const HSNWRef = useRef(null);
  const EMXPRef = useRef(null);
  const EMSNRef = useRef(null);
  const DWPRRef = useRef(null);
  const ACSHRef = useRef(null);
  const AWNDRef = useRef(null);
  const WSFMRef = useRef(null);

  refs.push(
    TAVGRef,
    TMAXRef,
    TMINRef,
    LTMNRef,
    HTMNRef,
    LTMXRef,
    HTMXRef,
    HLYHIDXNORMALRef,
    HLYWCHLNORMALRef,
    HPCPRef,
    PRCPRef,
    TPCPRef,
    TSNWRef,
    PTARef,
    HSNWRef,
    EMXPRef,
    EMSNRef,
    DWPRRef,
    ACSHRef,
    AWNDRef,
    WSFMRef,
  );


  const handleChange = (event) => {
    for (const ref of refs) {
      let { id, checked } = ref.current;
      // console.log(id)
      id = id.replace(/-/g, "");
      // console.log(id)
      sets[id] = checked;
    }
    dispatch({
      type: SETS_CHANGE,
      sets: sets
    });
  }

  const makeCheckboxes = () => {
    let checkboxes = dataSets.map((set, index) => {
      let { id, name } = set
      return (
        <Form.Group controlId={id}>
          <Form.Check
            type="checkbox"
            ref={refs[index]}
            label={`${id} : ${name}`}
            onChange={handleChange}
          />
        </Form.Group>
      )
    })
    return checkboxes
  }

  const checkboxRowMaker = (checkboxes) => {
    let rows = [];
    for (var i = 0; i < checkboxes.length; i++) {
      let checkboxRow = (
        <Row
          className="rad-row"
          key={i}
        >
          {checkboxes[i]}
          {checkboxes[i + 1]}
        </Row>
      );
      rows.push(checkboxRow);
      i++;
    }
    return rows;
  };

  const checkboxArrayMaker = (rows) => {
    let length = (rows.length % 2 === 0 ? rows.length : rows.length + 1);
    let firstHalf = [];
    let secondHalf = [];
    let columns = []
    for (let i = 0; i < length / 2; i++) {
      firstHalf.push(rows[i]);
    }
    columns.push(
      <Col
        className="rad-col"
      >
        {firstHalf}
      </Col>
    );
    for (let i = length / 2; i < length; i++) {
      secondHalf.push(rows[i]);
    }
    columns.push(
      <Col
        className="rad-col"
      >
        {secondHalf}
      </Col>
    );
    return columns
  }

  let checkboxArray = checkboxArrayMaker(checkboxRowMaker(makeCheckboxes()));

  return (
    <Form>
      <Row>
        {checkboxArray};
      </Row>
    </Form>
  );
}

export default DataSetsForm;
