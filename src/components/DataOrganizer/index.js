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
    let dataObject = (createDataObject(data));
    // console.log(dataObject);
    dataObject = organizeDataBySet(dataObject);
    // console.log(dataObject);
    dataObject = organizeDataByYear(dataObject);
    console.log(dataObject);

    // mutate each set into direct array (traverse object down)
    // within each set, average all data points that share a year
    // each set should become array of single values for each year
  }

  const createDataObject = (data) => {
    let dataObject = Object.keys(data).map((set) => {
      return data[set].data.results
    })
    return dataObject
  }

  const organizeDataBySet = (data) => {
    let organizedData = {};
    for (const dataSet of data) {
      let { datatype } = dataSet[0];
      if (organizedData.hasOwnProperty(datatype)) {
        for (const dataPoint of dataSet) {
          organizedData[datatype].push(dataPoint);
        }
      } else {
        organizedData[datatype] = dataSet;
      }
    }
    return organizedData
  }

  const organizeDataByYear = (data) => {
    let organizedData = {};

    for (const name of Object.keys(data)) {
      if (organizedData.hasOwnProperty(name)) {
        alert("bing");
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
    // console.log(organizedData);
    return organizedData;

  }

  function averager(array) {
    let sum = array.reduce((previous, current) => current += previous);
    let average = sum / array.length;
    return average;
  }

  // function objectMaker(response) {
  //   var organizedDataSet = {};
  //   var array = response.results
  //   for (var i = 0; i < array.length; i++) {
  //     var year = array[i].date.slice(0, 4);
  //     if (organizedDataSet.hasOwnProperty(year)) {
  //       organizedDataSet[year].push(array[i].value);
  //     }
  //     else {
  //       organizedDataSet[year] = [array[i].value];
  //     }
  //   }
  //   var averages = objectAverager(organizedDataSet);
  //   return averages;
  // }

  // function objectAverager(object) {
  //   var avgArray = [];
  //   for (var property in object) {
  //     var avg = yearAvg(object[property]);
  //     avgArray.push(avg);
  //   }
  //   return avgArray;
  // }

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
