import React, { createContext, useReducer, useContext } from "react";

import {
  GENERATE,
  NEW_PASSWORD
} from "./actions";

export const StoreContext = createContext();
const initialState = {
  
};

const reducer = (state, action) => {

  switch (action.type) {
    
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
