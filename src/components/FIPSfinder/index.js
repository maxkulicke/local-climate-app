import React, { useState, useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  FOUND_FIPS
} from "../../utils/actions";
import axios from "axios";

function FIPSfinder() {
  const [state, dispatch] = useStoreContext();
  const { query, zip, range, dataSets, process, data, findFips } = state;

  async function findFIPS(zip) {
    var smartyStreetsToken = "Tr2dL8zZULmwYqfpMw3W";
    var smartyStreetsID = "a0c54500-b299-d806-f742-6e5b1e339615";
    var queryURL
      = "https://us-zipcode.api.smartystreets.com/lookup?auth-id=" + smartyStreetsID +
      "&auth-token=" + smartyStreetsToken + "&zipcode=" + zip;
    let FIPS = await caller(queryURL)
    return FIPS;
  }

  async function caller(queryURL) {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let config = {
      method: "get",
      url: proxyurl + queryURL,
    };
    let data = await axios(config)
      .catch((error) => {
        return "ERROR"
      })
    console.log(data);
    // dispatch({
    //   type: FOUND_FIPS,
    //   data: data,
    // });
  }

  useEffect(() => {
    if (findFips) {
      findFIPS(zip);
    }
  }, [findFips]);

  return (
    <div />
  );
}

export default FIPSfinder;