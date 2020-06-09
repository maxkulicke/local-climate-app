import React, { createContext, useReducer, useContext } from "react";

import {
  FORM_SUBMIT,
  GET_FIPS,
  CALL_NOAA,
  ERROR,
  NEW_DATA,
  PROCESSED_DATA,
  CHART,
  SETS_CHANGE
} from "./actions";

export const StoreContext = createContext();
const initialState = {
  query: false,
  loading: true,
  process: false,
  chart: false,
  dataSets: {
    TAVG: false,
    TMAX: false,
    TMIN: false,
    LTMN: false,
    HTMN: false,
    LTMX: false,
    HTMX: false,
    HLYHIDXNORMAL: false,
    HLYWCHLNORMAL: false,
    HPCP: false,
    PRCP: false,
    TPCP: false,
    TSNW: false,
    PTA: false,
    HSNW: false,
    EMXP: false,
    EMSN: false,
    DWPR: false,
    ACSH: false,
    AWND: false,
    WSFM: false,
  },
  zip: "",
  range: "",
  data: {},
  errors: []
};

const reducer = (state, action) => {

  switch (action.type) {

    case SETS_CHANGE:
      let { sets } = action;
      return {
        ...state,
        dataSets: { ...sets },
      }

    case FORM_SUBMIT:
      let { zip, range } = action;
      return {
        ...state,
        query: true,
        loading: true,
        zip: zip,
        range: range,
        errors: []
      }

    case NEW_DATA:
      let { data } = action;
      return {
        ...state,
        query: false,
        process: true,
        data: data
      }

    case PROCESSED_DATA:
      return {
        ...state,
        process: false,
        chart: true,
        data: action.data,
      }

    case CHART:
      return {
        ...state,
        chart: false,
        loading: false
      }

      case ERROR: 
      let { errors } = state;
      errors.push(action.error)
      return {
        ...state,
        errors: errors,
      }

    default:
      return state;
  }
};

const StoreProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = [state, dispatch];
  return <StoreContext.Provider value={value} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
