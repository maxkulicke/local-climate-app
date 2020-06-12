import axios from "axios";
import dataSets from "./dataSets"
const moment = require('moment'); // require
moment().format();

const caller = async (queryURL) => {

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
    .catch((error) => {
      console.log(error);
      return "ERROR"
    })

  // console.log(data);
  return data;
}

// const findLocation = async (zip) => {
//   // console.log(zip)
//   const smartyStreetsToken = "remM8j4TDDnHBtRYp3JH";
//   const smartyStreetsID = "62e24096-94a0-bcf2-3b6d-206b893f0175";
//   const proxyurl = "https://cors-anywhere.herokuapp.com/";
//   let queryURL
//     = "https://us-zipcode.api.smartystreets.com/lookup?auth-id=" + smartyStreetsID +
//     "&auth-token=" + smartyStreetsToken + "&zipcode=" + zip;
//   let config = {
//     method: "get",
//     url: queryURL,
//   };
//   let data = await axios(config)
//     .catch((error) => {
//       console.log(error);
//       return "ERROR"
//     })
//   console.log(data);
//   // console.log(data[0].zipcodes[0].county_fips);
// }

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

  // locate: async (zip) => {
  //   let location = await findLocation(zip);
  //   console.log(location)
  //   return location;
  // },

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
            "&locationid=FIPS:" + fips + "&startdate=" + start + "-01-01&enddate=" + end + "-01-01";
          let setData = await caller(queryURL);
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
