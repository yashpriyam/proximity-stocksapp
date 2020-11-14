import React, { useState, useContext } from "react";
import moment from "moment";
import StockTable from "../stockstable/stocksTable.component";
import { AppStateContext } from "../appState/globalState.context";
import "./stockWrapper.style.scss";

const stockDataWithTimeStamp = {};
let stockDataWithTimeStampCache = {};

const StockWrapper = () => {
  const { stateAndDispatcher } = useContext(AppStateContext);
  const [appState] = stateAndDispatcher;

  const [searchField, setSearchField] = useState("");

  const stocksObj = Object.fromEntries(appState);

  for (const stockObj in stocksObj) {
    // moment.unix(Math.floor(new Date() / 1000))._i
    const currentPriceTime = [
      moment.unix(Math.floor(new Date() / 1000))._i,
      Number(stocksObj[stockObj].toFixed(2)),
    ];
    if (stockObj in stockDataWithTimeStamp) {
      stockDataWithTimeStamp[stockObj].push(currentPriceTime);
      // cleaner----
      if (stockDataWithTimeStamp[stockObj].length >= 100) {
        stockDataWithTimeStamp[stockObj].splice(0, 50);
      }
    } else {
      stockDataWithTimeStamp[stockObj] = [currentPriceTime];
    }
  }

  for (const xtock in stockDataWithTimeStamp) {
    stockDataWithTimeStampCache[xtock] = Object.fromEntries(
      stockDataWithTimeStamp[xtock]
    );
  }

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const stockDataWithTimeStampArray = Object.keys(stockDataWithTimeStampCache);
  const filteredStockDataWithTimeStampArray = stockDataWithTimeStampArray.filter(
    (stockName) => stockName.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <div className="stocks-wrapper">
        <div>Stocks</div>
        <div className="search-container">
          <input placeholder="Search stocks here" onChange={onSearchChange} />
        </div>
        <StockTable
          filteredStockDataWithTimeStampArray={
            filteredStockDataWithTimeStampArray
          }
          stockDataWithTimeStampCache={stockDataWithTimeStampCache}
          appState={appState}
          stockDataWithTimeStamp={stockDataWithTimeStamp}
        />
      </div>
    </>
  );
};

export default StockWrapper;
