import React, { createContext, useReducer, useContext } from "react";

import {
  FORM_SUBMIT,
  GET_FIPS,
  CALL_NOAA,
  PROCESS_DATA,
  SHOW_GRAPHS,
  SETS_CHANGE
} from "./actions";

export const StoreContext = createContext();
const initialState = {
  zip: "",
  dataSets: {
    temp: false,
    water: false,
    ghosts: false,
    riffs: false,
  },
  range: ""
};

const reducer = (state, action) => {

  switch (action.type) {

    case SETS_CHANGE:
      let { sets } = action;

      return {
        ...state,
        dataSets: { ...sets },
      }

    // case GENERATE:
    // let { length, sets } = action;

    //   return {
    //     ...state,
    //     generation: true,
    //     length: length,
    //     setsSelected: { ...sets },
    //   }

    // case NEW_PASSWORD:
    //   let { password } = action;
    //   return {
    //     ...state,
    //     generation: false,
    //     password: password,
    //   }

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
