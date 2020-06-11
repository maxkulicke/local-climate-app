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

  const findLocation = async () => {
    let location = await api.locate(zip);
    
    return location;
  }

  const fipsRandomizer = () => {
    let fips = [
      42101,
      36061,
      37119,
      "06075",
      53033,
    ];
    return fips[Math.floor(Math.random() * fips.length)]
  }

  useEffect(() => {
    async function fetchData(location) {
      // console.log(dataSets)
      let data = await api.getData(dataSets, location, range);
      console.log(data);
      dispatch({
        type: NEW_DATA,
        data: data
      });
    }
    if (query) {
      // fetchData(findLocation(zip));
      fetchData(fipsRandomizer());
    }
  }, [query]);

  return (
    <div />
  );
}

export default NOAACaller;
