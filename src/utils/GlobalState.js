import React, { createContext, useReducer, useContext } from "react";

import {
  FORM_SUBMIT,
  GET_FIPS,
  CALL_NOAA,
  NEW_DATA,
  PROCESSED_DATA,
  SHOW_GRAPHS,
  SETS_CHANGE
} from "./actions";

export const StoreContext = createContext();
const initialState = {
  query: false,
  process: false,
  dataSets: {
    temp: false,
    water: false,
    ghosts: false,
    riffs: false,
  },
  zip: "",
  range: "",
  data: {}
};

const reducer = (state, action) => {
  let { dataSets } = state;

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
        zip: zip,
        range: range
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
      // let { data } = action;
      return {
        ...state,
        query: false,
        process: false,
        data: data
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
