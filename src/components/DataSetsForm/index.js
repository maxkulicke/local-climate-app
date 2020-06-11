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
      // let { id, name } = set
      return (
        <Form.Group controlId={set}>
          <Form.Check
            type="checkbox"
            ref={refs[index]}
            label={set}
            onChange={handleChange}
          />
        </Form.Group>
      )
    })
    return checkboxes
  }

  // const checkboxArranger = (checkboxes) => {

  // }

  let checkboxArray = makeCheckboxes();

  return (
    <Form>
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

// const makeCheckboxes = () => {
//   let checkboxes = dataSets.map((set, index) => {
//     let { id, name } = set
//     return (
//       <Form.Group controlId={id}>
//         <Form.Check
//           type="checkbox"
//           ref={refs[index]}
//           label={`${id} : ${name}`}
//           onChange={handleChange}
//         />
//       </Form.Group>
//     )
//   })
//   return checkboxes
// }

// const checkboxRowMaker = (checkboxes) => {
//   let rows = [];
//   for (var i = 0; i < checkboxes.length; i++) {
//     let checkboxRow = (
//       <Row
//         className="rad-row"
//         key={i}
//       >
//         {checkboxes[i]}
//         {checkboxes[i + 1]}
//       </Row>
//     );
//     rows.push(checkboxRow);
//     i++;
//   }
//   return rows;
// };

// const checkboxArrayMaker = (rows) => {
//   let length = (rows.length % 2 === 0 ? rows.length : rows.length + 1);
//   let firstHalf = [];
//   let secondHalf = [];
//   let columns = []
//   for (let i = 0; i < length / 2; i++) {
//     firstHalf.push(rows[i]);
//   }
//   columns.push(
//     <Col
//       className="rad-col"
//     >
//       {firstHalf}
//     </Col>
//   );
//   for (let i = length / 2; i < length; i++) {
//     secondHalf.push(rows[i]);
//   }
//   columns.push(
//     <Col
//       className="rad-col"
//     >
//       {secondHalf}
//     </Col>
//   );
//   return columns
// }

// let checkboxArray = checkboxArrayMaker(checkboxRowMaker(makeCheckboxes()));
