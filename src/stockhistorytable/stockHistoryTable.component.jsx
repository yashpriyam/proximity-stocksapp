import React, { useContext } from "react";
import { AppStateContext } from "../appState/globalState.context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import "./stockHistoryTable.style.scss";

const StockHistoryTable = () => {
  const { stockHistoryDispatcher } = useContext(AppStateContext);
  const [stockHistory, stockHistoryReducer] = stockHistoryDispatcher;
  const { nameOfStock = "", priceData = [] } = stockHistory;
  const stockHistoryObject = Object.fromEntries(priceData);
  const removeHistory = () => {
    stockHistoryReducer({});
  };

  return (
    <div className="stocks-history-wrapper">
      <div>
        {nameOfStock
          ? `${nameOfStock.toUpperCase()}'s History`
          : "Click on History to see Stock history"}
      </div>
      <FontAwesomeIcon
        className="delete-icon"
        onClick={() => removeHistory()}
        icon={faTimesCircle}
      />
      <table>
        <tbody>
          <tr className="history-headers">
            <td>Date</td>
            <td>Time</td>
            <td>Price</td>
          </tr>
        </tbody>
      </table>
      <div className="history-table-row-container">
        <table className="history-table">
          <tbody>
            {Object.keys(stockHistoryObject).map((time) => {
              const normalizedTime = new Date(Number(time));
              const hours = normalizedTime.getHours();
              const minutes = "0" + normalizedTime.getMinutes();
              const seconds = "0" + normalizedTime.getSeconds();
              const formattedTime =
                hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
              const priceOfStock = `$${stockHistoryObject[time]}`;
              return (
                <tr className="history-table-row">
                  <td className="history-table-row-element">
                    {normalizedTime.toLocaleDateString()}
                  </td>
                  <td className="history-table-row-element">{formattedTime}</td>
                  <td className="history-table-row-element">{priceOfStock}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockHistoryTable;
