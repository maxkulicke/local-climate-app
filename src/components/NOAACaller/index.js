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

  useEffect(() => {
    async function fetchData(location) {
      let data = await api.getData(dataSets, location, range);
      dispatch({
        type: NEW_DATA,
        data: data
      });
    }
    if (query) {
      // fetchData(findLocation(zip));
      fetchData(42101);

    }
  }, [query]);

  return (
    <div />
  );
}

export default NOAACaller;
