import React, { useContext } from "react";
import { AppStateContext } from "../appState/globalState.context";

const StockChartButton = (props) => {
  const { priceData } = props;
  const { stockHistoryDispatcher } = useContext(
    AppStateContext
  );
  const [stockHistory, stockHistoryReducer] = stockHistoryDispatcher;

  console.log(stockHistory);
  const showStockHistory = () => {
    stockHistoryReducer(priceData);
  };
  
  return (
    <td>
      <button onClick={() => showStockHistory()}>Stock History</button>
    </td>
  );
};

export default StockChartButton;
