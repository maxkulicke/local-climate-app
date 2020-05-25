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
    HLYTEMPNORMAL: false,
    LTMN: false,
    HTMN: false,
    LTMX: false,
    HTMX: false,
    FZF0: false,
    FZF5: false,
    EMNT: false,
    EMXT: false,
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
    FMTM: false,
    HLYWINDPCTCLM: false,
    HLYWINDVCTDIR: false,
    WSFM: false,
    HLYPRESNORMAL: false
  })

  const refs = [];
  const TAVGRef = useRef(null);
  const TMAXRef = useRef(null);
  const TMINRef = useRef(null);
  const HLYTEMPNORMALRef = useRef(null);
  const LTMNRef = useRef(null);
  const HTMNRef = useRef(null);
  const LTMXRef = useRef(null);
  const HTMXRef = useRef(null);
  const FZF0Ref = useRef(null);
  const FZF5Ref = useRef(null);
  const EMNTRef = useRef(null);
  const EMXTRef = useRef(null);
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
  const FMTMRef = useRef(null);
  const HLYWINDPCTCLMRef = useRef(null);
  const HLYWINDVCTDIRRef = useRef(null);
  const WSFMRef = useRef(null);
  const HLYPRESNORMALRef = useRef(null);

  refs.push(
    TAVGRef,
    TMAXRef,
    TMINRef,
    HLYTEMPNORMALRef,
    LTMNRef,
    HTMNRef,
    LTMXRef,
    HTMXRef,
    FZF0Ref,
    FZF5Ref,
    EMNTRef,
    EMXTRef,
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
    FMTMRef,
    HLYWINDPCTCLMRef,
    HLYWINDVCTDIRRef,
    WSFMRef,
    HLYPRESNORMALRef
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

  makeCheckboxes();

  return (
    <Form>
      {makeCheckboxes()};
    </Form>
  );
}

export default DataSetsForm
  ;
