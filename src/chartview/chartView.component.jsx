import React, { useContext } from "react";
import Chart from "../charts/chart.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { AppStateContext } from "../appState/globalState.context";
const ChartView = () => {
  const { stockNameAndDispatcher, stockPriceDataDispatcher } = useContext(
    AppStateContext
  );

  const [stockNameForChart, stockNameForChartReducer] = stockNameAndDispatcher;
  const [
    priceDataArrayForChart,
    priceDataArrayForChartReducer,
  ] = stockPriceDataDispatcher;
  const removeChart = () => {
    stockNameForChartReducer("");
    priceDataArrayForChartReducer([]);
  };

  return (
    <>
      <div>
        <FontAwesomeIcon
          className="delete-icon"
          onClick={() => removeChart()}
          icon={faTimesCircle}
        />
      </div>
      <div className="chartview-main">
        <Chart name={stockNameForChart} priceData={priceDataArrayForChart} />
      </div>
    </>
  );
};

export default ChartView;
