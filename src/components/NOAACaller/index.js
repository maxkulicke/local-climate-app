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

  const findLocation = () => {
    let location = api.locate(zip);
    return location;
  }


  useEffect(() => {
    async function fetchData(location) {
      let data = await api.getData(dataSets, location);
      console.log(data);
      dispatch({
        type: NEW_DATA,
        data: data
      });
    }
    if (query) {
      // let location = findLocation()
      fetchData(findLocation());
    }
  }, [query]);

  // useEffect(() => {
  //   async function fetchData(location) {
  //     let PRCP = await api.PRCP();
  //     let TAVG = await api.TAVG();
  //     let EMXT = await api.EMXT();
  //     // let all = await api.allDataSets();

  //     let data = {
  //       PRCP: PRCP,
  //       TAVG: TAVG,
  //       EMXT: EMXT,
  //       // all: all
  //       // PRCP : await api.PRCP(),
  //       // TAVG : await api.TAVG(),
  //       // EMXT : await api.EMXT(),
  //     }
  //     console.log(data);
  //     dispatch({
  //       type: NEW_DATA,
  //       data: data
  //     });
  //   }
  //   if (query) {
  //     // let location = findLocation()
  //     fetchData(findLocation());
  //   }
  // }, [query]);


  return (
    <div />
  );
}

export default NOAACaller;
