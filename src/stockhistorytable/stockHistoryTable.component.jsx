import React, { useContext } from "react";
import { AppStateContext } from "../appState/globalState.context";
import "./stockHistoryTable.style.scss";

const StockHistoryTable = () => {
  const { stockHistoryDispatcher } = useContext(AppStateContext);
  const [stockHistory] = stockHistoryDispatcher;
  const stockHistoryObject = Object.fromEntries(stockHistory);
  // console.log(stockHistory);
  return (
    <div className="stocks-history-wrapper">
      <table className="history-table">
        <tbody>
          {Object.keys(stockHistoryObject).map((time) => {
            const normalizedDateTime = new Date(Number(time) * 1000);
            // const date = normalizedDateTime.getDate()
            const hours = normalizedDateTime.getHours();
            const minutes = "0" + normalizedDateTime.getMinutes();
            const seconds = "0" + normalizedDateTime.getSeconds();
            const formattedTime =
              hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
            const priceOfStock = `$${stockHistoryObject[time]}`;
            // // console.log(date);
            return (
              <>
              <div></div>
              <tr><td>Time</td><td>Price</td></tr>
              <tr className="history-table-row">
                  {/* <td className="history-table-row-element">{date}</td> */}
                <td className="history-table-row-element">{formattedTime}</td>
                <td className="history-table-row-element">{priceOfStock}</td>
              </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StockHistoryTable;
