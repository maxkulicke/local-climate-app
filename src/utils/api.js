import axios from "axios";
import dataSets from "./dataSets"
const moment = require('moment'); // require
moment().format(); 

const caller = async (queryURL) => {
  // console.log("woof");

  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  let config = {
    method: "get",
    url: proxyurl + queryURL,
    headers: {
      // "token" : process.env.REACT_APP_API_KEY
      // you need your token hardcoded here
      token: "OBzsTvSdeIEAZDdTInysIDJSVQZdhKtx"
    },
  };
  let data = await axios(config)
  // console.log("woof");

  console.log(data);
  return data;
}

const findLocation = () => {

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

  locate: () => {
    return 42101;
  },

  getData: async (dataSets, location, range) => {
    // console.log("woof");
    range = parseInt(range);
    let yearRange = getRange(range, getYear());
    let { start, end } = yearRange;
    let data = await Promise.all(Object.keys(dataSets).map(async (set, index) => {
      if (dataSets[set]) {
        // console.log("woof");
        let setId = findDataSetId(index);
        let queryURL = 
        "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&datatypeid=" + setId + 
        "&locationid=FIPS:"+ location + "&startdate=" + start + "-01-01&enddate=" + end + "-01-01";
        let setData = await caller(queryURL);
        return setData;
      }
    }));
    console.log(data);
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
