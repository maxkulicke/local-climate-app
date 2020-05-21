import React, { useState, useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  NEW_DATA
} from "../../utils/actions";
import api from "../../utils/api";

function NOAACaller() {
  const [state, dispatch] = useStoreContext();
  const { query, zip, range, dataSets } = state;

  useEffect(() => {
    async function fetchData() {
      let PRCP = await api.PRCP();
      let TAVG = await api.TAVG();
      let EMXT = await api.EMXT();

      let data = {
        PRCP: PRCP,
        TAVG: TAVG,
        EMXT: EMXT
      }
      // console.log(data);
      dispatch({
        type: NEW_DATA,
        data: data
      });
    }
    if (query) {
      fetchData();
    }
  }, [query]);


  return (
    <div />
  );
}

export default NOAACaller;
