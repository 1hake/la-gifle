import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useReducer,
} from "react";

import { useMediaQuery } from 'beautiful-react-hooks';
import { toast } from "react-toastify";
import { db } from "../firebase";
import { reducer, initialStateValues } from "./Reducer";

export const MyContext = React.createContext();

export const MainContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initialStateValues);
  const isSmall = useMediaQuery('(max-width: 48rem)');
  const isLarge = useMediaQuery('(min-width: 48rem)');

  useEffect(() => {
    console.log('context loaded');
  }, []);

  return (
    <MyContext.Provider
      value={{
        state,
        dispatch,
        isLarge, isSmall
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
