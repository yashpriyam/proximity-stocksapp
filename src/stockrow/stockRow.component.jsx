import React, { Fragment, useContext } from "react";
import StockName from "../stockname/stockName.component";
import StockLastUpadateTime from "../stocklastupadatetime/stockLastUpadateTime.component";
import StockPrice from "../stockprice/stockPrice.component";
import StockTrendArrow from "../stocktrendarrow/stockTrendArrow.component";
import StockTrendPercent from "../stocktrendpercent/stockTrendPercent.component";
import StockChartButton from "../stockchartbutton/stockChartButton.component";
import StockHistoryButton from "../stockhistorybutton/stockHistoryButton.component";
import { AppStateContext } from "../appState/globalState.context";
import "./stockRow.style.css";

const StockRow = (props) => {
  const { watchListStockDataDispatcher } = useContext(AppStateContext);
  const [
    watchListStockData,
    watchListStockDataReducer,
  ] = watchListStockDataDispatcher;
  console.log(watchListStockData);
  const {
    stock,
    percentCalc,
    formattedTime,
    currentStockPrice,
    stockDataWithTimeStamp,
  } = props;

  const onDragStart = (e, stock) => {
    e.dataTransfer.setData("text/plain", stock);
  };

  const watchListDataObject = {
    stock,
    percentCalc,
    formattedTime,
    currentStockPrice,
  };
  watchListStockDataReducer({ type: "add", value: watchListDataObject });

  return (
    <Fragment key={stock}>
      <div draggable onDragStart={(e) => onDragStart(e, stock)}>
        <tr className="stock-table-row">
          <StockName stockname={stock} />
          <StockLastUpadateTime formattedTime={formattedTime} />
          <StockPrice currentStockPrice={currentStockPrice} />
          <span className="stock-StockTrendPercent">
            <StockTrendArrow percentCalc={percentCalc} />
            <StockTrendPercent percentCalc={percentCalc} />
          </span>

          <span className="stock-buttons">
            <StockChartButton
              priceData={stockDataWithTimeStamp[stock]}
              nameOfStock={stock}
            />
            <StockHistoryButton
              priceData={stockDataWithTimeStamp[stock]}
              nameOfStock={stock}
            />
          </span>
        </tr>
      </div>
    </Fragment>
  );
};

export default StockRow;
