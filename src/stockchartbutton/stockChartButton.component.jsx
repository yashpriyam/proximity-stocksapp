import React, { useContext } from "react";
import { AppStateContext } from "../appState/globalState.context";

const StockChartButton = (props) => {
  const { priceData, nameOfStock } = props;
  const { stockNameAndDispatcher, stockPriceDataDispatcher } = useContext(
    AppStateContext
  );
  const [stockNameForChart, stockNameForChartReducer] = stockNameAndDispatcher;
  const [
    priceDataArrayForChart,
    priceDataArrayForChartReducer,
  ] = stockPriceDataDispatcher;

  console.log(stockNameForChart, priceDataArrayForChart);

  const showStockChart = () => {
    stockNameForChartReducer(nameOfStock);
    priceDataArrayForChartReducer(priceData);
  };

  return (
    <td>
      <button onClick={() => showStockChart()}>See Chart</button>
    </td>
  );
};

export default StockChartButton;
