import axios from "axios";

export default {

  testCall: async () => {
    let FIPS = "42101";
    let queryURL = "https://www.ncdc.noaa.gov/cdo-web/api/v2/datacategories?limit=41"

    // let queryURL =    
    // `https://www.ncdc.noaa.gov/cdo-web/api/v2/data?datasetid=GSOY&datatypeid=TAVG&locationid=FIPS:
    // ${FIPS}&startdate=2000-01-01&enddate=2010-01-01`;
    let config = {
      method: "get",
      url: queryURL,
      headers: {
        // "token" : process.env.REACT_APP_API_KEY
        // you need your token hardcoded here
      },
    };
    let myReturn = await axios(config)
    console.log(myReturn);
    return myReturn;
  }

}
