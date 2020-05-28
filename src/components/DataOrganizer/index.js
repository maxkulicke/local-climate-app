import React, { useState, useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  PROCESSED_DATA
} from "../../utils/actions";

function DataOrganizer() {
  const [state, dispatch] = useStoreContext();
  const { query, zip, range, dataSets, process, data } = state;

  const organize = () => {
    // console.log("woof");
    let dataObject = (createDataObject(data));
    dataObject = organizeDataBySet(dataObject);
    dataObject = organizeDataByYear(dataObject);
    dataObject = yearlyAverager(dataObject);
    console.log(dataObject)
    dispatch({
      type: PROCESSED_DATA,
      data: dataObject,
    });
  }

  const createDataObject = (data) => {
    let dataObject = Object.keys(data).map((set) => {
      return data[set].data.results
    })
    return dataObject
  }

  const organizeDataBySet = (data) => {
    // console.log(data);
    let organizedData = {};
    for (const dataSet of data) {
      if (dataSet !== undefined) {
        let { datatype } = dataSet[0];
        if (organizedData.hasOwnProperty(datatype)) {
          for (const dataPoint of dataSet) {
            organizedData[datatype].push(dataPoint);
          }
        } else {
          organizedData[datatype] = dataSet;
        }
      }
    }
    return organizedData
  }

  const organizeDataByYear = (data) => {
    let organizedData = {};

    for (const name of Object.keys(data)) {
      if (organizedData.hasOwnProperty(name)) {
      } else {
        organizedData[name] = {};
        let set = data[name];
        for (const dataPoint of set) {
          var year = dataPoint.date.slice(0, 4);
          if (organizedData[name].hasOwnProperty(year)) {
            organizedData[name][year].push(dataPoint);
          }
          else {
            organizedData[name][year] = [dataPoint]
          }
        }
      }
    }
    return organizedData;
  }

  const yearlyAverager = (data) => {
    let organizedData = {};
    for (const name of Object.keys(data)) {
      if (organizedData.hasOwnProperty(name)) {
      } else {
        organizedData[name] = {};
      }
      for (const year of Object.keys(data[name])) {
        if (organizedData.hasOwnProperty(name)) {
        } else {
          organizedData[name][year] = 0;
        }
        let values = [];
        for (const dataPoint of data[name][year]) {
          values.push(dataPoint.value)
        }
        let average = averager(values);
        organizedData[name][year] = average
      }
    }
    return organizedData
  }

  function averager(array) {
    let sum = array.reduce((previous, current) => current += previous);
    let average = sum / array.length;
    return average;
  }

  useEffect(() => {
    if (process) {
      organize();
    }
  }, [process]);

  return (
    <div />
  );
}

export default DataOrganizer;
