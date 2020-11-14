import React, { useContext } from "react";
import { AppStateContext } from "../appState/globalState.context";

const StockChartButton = (props) => {
  const { nameOfStock, priceData } = props;
  const { stockHistoryDispatcher } = useContext(
    AppStateContext
  );
  const [stockHistory, stockHistoryReducer] = stockHistoryDispatcher;

  console.log(stockHistory);
  const showStockHistory = () => {
    stockHistoryReducer({nameOfStock, priceData});
  };
  
  return (
    <td>
      <button className='history-btn' onClick={() => showStockHistory()}>History</button>
    </td>
  );
};

export default StockChartButton;
