import axios from "axios";
import dataSets from "./dataSets"
const moment = require('moment');
moment().format();

const caller = async (queryURL, counter) => {
  // console.log(process.env.REACT_APP_API_KEY);
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let config = {
    method: "get",
    url: proxyurl + queryURL,
    headers: {
      "token" : process.env.REACT_APP_API_KEY
    },
  };
  let data = await axios(config)
    .catch((error) => {
      let code = error.response.status
      return (
        "ERROR"
        // code === 429 && counter < 10 ? caller(queryURL, counter + 1) : "ERROR"
      )
    })
  return data;
}

const findDataSetId = (index) => {
  return dataSets[index].id;
}

const getYear = () => {
  var now = parseInt(moment().format('YYYY'));
  return now;
}

const getRange = (range, now) => {
  now = now - 2;
  let beginning = now - range;
  return {
    start: beginning,
    end: now
  }
}

export default {

  getData: async (dataSets, fips, range) => {
    range = parseInt(range);
    let yearRange = getRange(range, getYear());
    let { start, end } = yearRange;
    let data = await Promise.all(Object.keys(dataSets).map(async (set, index) => {
      if (dataSets[set].selected) {
        let dataCollection = [];
        for (const setId of dataSets[set].sets) {
          let queryURL =
          "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&datatypeid=" + setId +
          "&locationid=FIPS:" + fips + "&startdate=" + start + "-01-01&enddate=" + end + "-01-01"
          let setData = await caller(queryURL, 0);
          dataCollection.push((setData !== "ERROR" ? setData : `${setId}: ${setData}`));
        }
        let dataSet = {
          name: set,
          data: dataCollection
        }
        return dataSet;
      }
    }));
    data = data.filter(dataSet => dataSet !== undefined)
    return data;
  },

  allDataSets: async () => {
    // let queryURL =    
    // "https://www.ncdc.noaa.gov/cdo-web/api/v2/datatypes?limit=100";

    let queryURL = "www.ncdc.noaa.gov/cdo-web/api/v2/datatypes?datacategoryid=PRES&limit=1000";


    let allDataSetsreturn = await caller(queryURL)
    return allDataSetsreturn;
  },

}
