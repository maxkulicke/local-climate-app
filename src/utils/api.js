import axios from "axios";
import dataSets from "./dataSets"

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
  return data;
}

const findLocation = () => {

}

const findDataSetId = (index) => {
  return dataSets[index].id;
}

export default {

  locate: () => {
    return 42101;
  },

  getData: async (dataSets, location) => {
    let data = await Promise.all(Object.keys(dataSets).map(async (set, index) => {
      if (dataSets[set]) {
        let setId = findDataSetId(index);
        let queryURL = 
        "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&datatypeid=" 
        + setId + "&locationid=FIPS:"
        + location + "&startdate=2010-01-01&enddate=2012-01-01";
        let setData = await caller(queryURL);
        return setData
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
