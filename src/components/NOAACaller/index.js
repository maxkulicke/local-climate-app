import React, { useState, useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  NEW_DATA
} from "../../utils/actions";
import api from "../../utils/api";

function NOAACaller() {
  const [state, dispatch] = useStoreContext();
  const { query, fips, range, dataSets } = state;

  // const findLocation = async () => {
  //   let location = await api.locate(zip);
    
  //   return location;
  // }

  // const fipsRandomizer = () => {
  //   let fips = [
  //     42101,
  //     36061,
  //     37119,
  //     "06075",
  //     53033,
  //   ];
  //   return fips[Math.floor(Math.random() * fips.length)]
  // }

  useEffect(() => {
    async function fetchData(fips) {
      let data = await api.getData(dataSets, fips, range);
      dispatch({
        type: NEW_DATA,
        data: data
      });
    }
    if (query) {
      // fetchData(findLocation(zip));
      fetchData(fips);
    }
  }, [query]);

  return (
    <div />
  );
}

export default NOAACaller;
