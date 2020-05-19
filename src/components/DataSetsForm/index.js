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

function DataSetsForm() {
  const [state, dispatch] = useStoreContext();

  const [sets, setSets] = useState({
      temp: false,
      water: false,
      ghosts: false,
      riffs: false,
  })

  const refs = [];
  const tempRef = useRef(null);
  const waterRef = useRef(null);
  const ghostsRef = useRef(null);
  const riffsRef = useRef(null);
  refs.push(tempRef, waterRef, ghostsRef, riffsRef);

  const handleChange = (event) => {
    // event.preventDefault();
    for (const ref of refs) {
      let { id, checked } = ref.current;
      sets[id] = checked;
    }
    dispatch({
      type: SETS_CHANGE,
      sets: sets
    });
    console.log(sets);
  }

  return (
    <Form>
      <Form.Group controlId="temp">
        <Form.Check 
        type="checkbox" 
        ref={tempRef}
        label="temp" 
        onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="water">
        <Form.Check 
        type="checkbox" 
        label="water" 
        ref={waterRef}
        onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="ghosts">
        <Form.Check 
        type="checkbox" 
        label="ghosts" 
        ref={ghostsRef}
        onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="riffs">
        <Form.Check 
        type="checkbox" 
        label="riffs" 
        ref={riffsRef}
        onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
}

export default DataSetsForm
  ;
