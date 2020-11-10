import React, { createContext, useReducer } from "react";
import {
  reducer,
  appState,
  stockNameForChart,
  priceDataArrayForChart,
  stockNameForChartReducer,
  priceDataArrayForChartReducer,
  stockHistoryReducer,
  stockHistory,
  watchListStockData,
  watchListStockDataReducer,
} from "./globalState.reducer";

export const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const stateAndDispatcher = useReducer(reducer, appState);
  const stockNameAndDispatcher = useReducer(
    stockNameForChartReducer,
    stockNameForChart
  );
  const stockPriceDataDispatcher = useReducer(
    priceDataArrayForChartReducer,
    priceDataArrayForChart
  );
  const stockHistoryDispatcher = useReducer(stockHistoryReducer, stockHistory);
  const watchListStockDataDispatcher = useReducer(
    watchListStockDataReducer,
    watchListStockData
  );
  return (
    <AppStateContext.Provider
      value={{
        stateAndDispatcher,
        stockNameAndDispatcher,
        stockPriceDataDispatcher,
        stockHistoryDispatcher,
        watchListStockDataDispatcher,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
