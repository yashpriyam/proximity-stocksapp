import React, { useContext } from "react";
import ChartVisibilityContext from "../localcontexts/chartVisibility.context";
import { AppStateContext } from "../appState/globalState.context";

const StockChartButton = (props) => {
  const { priceData, nameOfStock } = props;
  const { setChartVisible, chartVisible } = useContext(ChartVisibilityContext);
  const { stockNameAndDispatcher, stockPriceDataDispatcher } = useContext(
    AppStateContext
  );
  const [stockNameForChart, stockNameForChartReducer] = stockNameAndDispatcher;
  const [
    priceDataArrayForChart,
    priceDataArrayForChartReducer,
  ] = stockPriceDataDispatcher;
// console.log(chartVisible);
  console.log(stockNameForChart, priceDataArrayForChart);
  const showStockChart = () => {
    setChartVisible(!chartVisible);
    stockNameForChartReducer(nameOfStock);
    priceDataArrayForChartReducer(priceData);
  };
  // console.log(chartVisible);
  return (
    <td>
      <button onClick={() => showStockChart()}>See Chart</button>
    </td>
  );
};

export default StockChartButton;
