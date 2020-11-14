import React, { useState, useContext } from "react";
import { AppStateContext } from "../appState/globalState.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./watchList.style.scss";

const stocksInWatchList = {};
const WatchList = () => {
  const [dropzoneClassName, setDropzoneClassName] = useState(
    "watch-stocks-container"
  );
  const { watchListStockDataDispatcher } = useContext(AppStateContext);
  const [watchListStockData] = watchListStockDataDispatcher;

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    const stockName = e.dataTransfer.getData("text");
    stocksInWatchList[stockName] = 1;
    setDropzoneClassName("watch-stocks-container");
  };

  const onDragEnter = () => {
    setDropzoneClassName("dropzone-hovered");
  };

  const removeStockButton = (stock) => {
    delete stocksInWatchList[stock];
  };
  return (
    <div
      className="watchlist-container"
      onDragEnter={() => onDragEnter()}
      onDragLeave={() => setDropzoneClassName("watch-stocks-container")}
    >
      <div>Create Watch List</div>
      <div
        className={dropzoneClassName}
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e)}
      >
        {Object.keys(stocksInWatchList).map((stock) => {
          const {
            formattedTime,
            percentCalc,
            currentStockPrice,
          } = watchListStockData[stock];
          return (
            <div className="stock-row">
              <table>
                <tbody>
                  <tr className="stock-table-row">
                    <td>{stock.toUpperCase()}</td>
                    <td>{formattedTime}</td>
                    <td>${currentStockPrice}</td>
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
                        className="delete-icon"
                        onClick={() => removeStockButton(stock)}
                        icon={faTrashAlt}
                      />
                    </td>
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
