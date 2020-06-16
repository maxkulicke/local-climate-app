import React, { useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  NEW_DATA
} from "../../utils/actions";
import api from "../../utils/api";

function NOAACaller() {
  const [state, dispatch] = useStoreContext();
  const { query, fips, range, dataSets } = state;

  useEffect(() => {
    async function fetchData(fips) {
      console.log(dataSets);
      let data = await api.getData(dataSets, fips, range);
      dispatch({
        type: NEW_DATA,
        data: data
      });
    }
    if (query) {
      fetchData(fips);
    }
  }, [query]);

  return (
    <div />
  );
}

export default NOAACaller;
