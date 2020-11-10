import React, { useContext } from "react";
import Chart from "../charts/chart.component";
// import ChartVisibilityContext from "../chartvisibilitycontext/chartVisibility.context"
import { AppStateContext } from "../appState/globalState.context";
const ChartView = () => {
//   const { stockname, stockpricedata } = useContext(ChartVisibilityContext);
  const { stockNameAndDispatcher, stockPriceDataDispatcher } = useContext(AppStateContext);
  const [ stockNameForChart ] = stockNameAndDispatcher;
  const [ priceDataArrayForChart ] = stockPriceDataDispatcher;
//   // console.log(stockname, stockpricedata);
  return (
    <div className="chartview-main">
      <Chart name={stockNameForChart} priceData={priceDataArrayForChart} />
    </div>
  );
};

export default ChartView;
