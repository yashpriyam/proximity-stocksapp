import React, { useContext } from "react";
import Chart from "../charts/chart.component";
import { AppStateContext } from "../appState/globalState.context";
const ChartView = () => {
  
  const { stockNameAndDispatcher, stockPriceDataDispatcher } = useContext(AppStateContext);
  const [ stockNameForChart ] = stockNameAndDispatcher;
  const [ priceDataArrayForChart ] = stockPriceDataDispatcher;

  return (
    <div className="chartview-main">
      <Chart name={stockNameForChart} priceData={priceDataArrayForChart} />
    </div>
  );
};

export default ChartView;
