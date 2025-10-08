import React, {  useEffect, useMemo, useReducer } from "react";
import { DISPLAY_DATA, reducer } from "../reducer/reducer";
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

  const contextValue = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state]
  );
  return (
    <AppContext.Provider value={contextValue}>
      {children}
      <ToastContainer />
    </AppContext.Provider>
  );
};

export default AppContexts;
