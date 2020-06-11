import React, { useState, useRef, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  PROCESSED_DATA,
  ERROR
} from "../../utils/actions";

function DataOrganizer() {
  const [state, dispatch] = useStoreContext();
  const { process, data } = state;

  const organize = () => {
    // console.log(data);
    let processedDataObject = {}
    for (const set of data) {
      let {name} = set;
      console.log(name)
      processedDataObject[name] = {}
      let dataObject = (createDataObject(set.data));
      dataObject = organizeDataBySet(dataObject);
      dataObject = organizeDataByYear(dataObject);
      dataObject = yearlyAverager(dataObject);
      console.log(dataObject);
      processedDataObject[name].data = dataObject
    }
    console.log(processedDataObject);
    dispatch({
      type: PROCESSED_DATA,
      data: processedDataObject,
    });
  }

  const createDataObject = (data) => {
    console.log(data);

    let dataObject = Object.keys(data).map((set) => {
      if (typeof data[set] === "string") {
        let error = data[set].slice(0,4);
        console.log(error);
        dispatch({
          type: ERROR,
          error: error,
        });
        return "ERROR"
      } else {
        return data[set].data.results
      }
    })
    return dataObject
  }

  const organizeDataBySet = (data) => {
    let organizedData = {};
    for (const dataSet of data) {
      if (dataSet !== undefined && dataSet !== "ERROR") {
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
