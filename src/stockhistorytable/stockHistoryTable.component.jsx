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
            const normalizedTime = new Date(Number(time));
            const hours = normalizedTime.getHours();
            const minutes = "0" + normalizedTime.getMinutes();
            const seconds = "0" + normalizedTime.getSeconds();
            const formattedTime =
              hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
            const priceOfStock = `$${stockHistoryObject[time]}`;
            // console.log(new Date(Number(time)).getHours(), hours);
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
