import React, { useState, useContext } from "react";
import { AppStateContext } from "../appState/globalState.context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import "./watchList.style.scss";

const stocksInWatchList = {};
// let stockName, formattedTime, currentStockPrice, percentCalc
const WatchList = () => {
  const [dropzoneClassName, setDropzoneClassName] = useState(
    "watch-stocks-container"
  );
  const { watchListStockDataDispatcher } = useContext(AppStateContext);
  const [watchListStockData] = watchListStockDataDispatcher;

  // const { formattedTime, percentCalc, currentStockPrice } = watchListStockData;
  // console.log(formattedTime, currentStockPrice, percentCalc);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    const stockName = e.dataTransfer.getData("text");
    stocksInWatchList[stockName] = 1;
    setDropzoneClassName("watch-stocks-container");
    // console.log(stocksInWatchList);
  };

  const onDragEnter = () => {
    setDropzoneClassName("dropzone-hovered");
  };

  const removeStockButton = (stock) => {
    delete stocksInWatchList[stock]
  }
  // console.log(stocksInWatchList);
  return (
    <div
      className="watchlist-container"
      onDragEnter={() => onDragEnter()}
      onDragLeave={() => setDropzoneClassName("watch-stocks-container")}
    >
      <div>Watch List</div>
      <div
        className={dropzoneClassName}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e)}
        
      >
        DROPZONE
        {Object.keys(stocksInWatchList).map((stock) => {
          const { formattedTime, percentCalc, currentStockPrice } = watchListStockData[stock];
          return (
            <div className="stock-row">
              <table>
                <tbody>
                  <tr className="stock-table-row">
                    <td>{stock.toUpperCase()}</td>
                    <td>{formattedTime}</td>
                    <td>${currentStockPrice}USD</td>
                    <td
                      className={
                        percentCalc > 0
                          ? "green-color"
                          : percentCalc < 0
                          ? "red-color"
                          : "white-color"
                      }
                    >
                      {percentCalc}%
                    </td>
                    <td>
                    <FontAwesomeIcon
                className='arrow'
                onClick={() => removeStockButton(stock)}
                icon={faTrashAlt}
            /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchList;
