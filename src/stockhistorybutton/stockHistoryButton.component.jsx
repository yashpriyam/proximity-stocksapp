import React, { useContext } from "react";
import StockHistoryVisibilityContext from "../localcontexts/stockHistoryVisibility.context";
import { AppStateContext } from "../appState/globalState.context";

const StockChartButton = (props) => {
  const { priceData } = props;
  const { setStockHistoryVisible, stockHistoryVisible } = useContext(StockHistoryVisibilityContext);
  const { stockHistoryDispatcher } = useContext(
    AppStateContext
  );
  // console.log(stockHistoryVisible);
  const [stockHistory, stockHistoryReducer] = stockHistoryDispatcher;

  console.log(stockHistory);
  const showStockHistory = () => {
    setStockHistoryVisible(!stockHistoryVisible);
    stockHistoryReducer(priceData);
  };
  // console.log(stockHistoryVisible);
  
  return (
    <td>
      <button onClick={() => showStockHistory()}>Stock History</button>
    </td>
  );
};

export default StockChartButton;
