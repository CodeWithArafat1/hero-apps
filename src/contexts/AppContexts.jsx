import React, { memo, useEffect, useReducer } from "react";
import { DISPLAY_DATA, reducer, SET_LOADING } from "../reducer/reducer";
import { AppContext } from "./context";
import { ToastContainer } from "react-toastify";

const initialState = {
  data: [],
  displayData: [],
  showChart: [],
  loading: true,
  savedLocal: [],
  isSelected: "def",
  isExisting: false,
};

const AppContexts = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchDataJosn = async () => {
      try {
        const res = await fetch("/api.json");
        const data = await res.json();
        dispatch({ type: DISPLAY_DATA, payload: data });
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataJosn();
  }, [dispatch]);
  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
      <ToastContainer />
    </AppContext.Provider>
  );
};

export default memo(AppContexts);
