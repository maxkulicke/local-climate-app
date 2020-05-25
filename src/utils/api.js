import axios from "axios";

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

export default {

  locate: () => {
    return "woof";
  },

  allDataSets: async () => {
    // let queryURL =    
    // "https://www.ncdc.noaa.gov/cdo-web/api/v2/datatypes?limit=100";

    let queryURL = "www.ncdc.noaa.gov/cdo-web/api/v2/datatypes?datacategoryid=PRES&limit=1000";


    let allDataSetsreturn = await caller(queryURL)
    return allDataSetsreturn;
  },

  // template literals dont work
  PRCP: async () => {
    let FIPS = "42101";
    let queryURL =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&datatypeid=PRCP&locationid=FIPS:"
      + FIPS + "&startdate=2010-01-01&enddate=2012-01-01";

    let PRCPreturn = await caller(queryURL)
    return PRCPreturn;
  },

  TAVG: async () => {
    let FIPS = "42101";
    let queryURL =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&datatypeid=TAVG&locationid=FIPS:"
      + FIPS + "&startdate=2010-01-01&enddate=2012-01-01";

    let TAVGreturn = await caller(queryURL)
    return TAVGreturn;
  },

  EMXT: async () => {
    let FIPS = "42101";
    let queryURL =
      "https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&datatypeid=EMXT&locationid=FIPS:"
      + FIPS + "&startdate=2010-01-01&enddate=2012-01-01";

    let EMXTreturn = await caller(queryURL)
    return EMXTreturn;
  }

}
