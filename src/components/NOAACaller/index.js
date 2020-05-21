import React, { useState, useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  SETS_CHANGE
} from "../../utils/actions";
import api from "../../utils/api";

function NOAACaller() {
  const [state, dispatch] = useStoreContext();

  const { query, zip, range, dataSets } = state;
  // const [sets, setSets] = useState({
  //     temp: false,
  //     water: false,
  //     ghosts: false,
  //     riffs: false,
  // })

  useEffect(() => {
    async function fetchData() {
      let PRCP = await api.PRCP();
      let TAVG = await api.TAVG();
      let EMXT = await api.EMXT();

      console.log(PRCP);
      console.log(TAVG);
      console.log(EMXT);
    }
    fetchData();
  }, [query]);


  return (
    <div />
  );
}

export default NOAACaller;
