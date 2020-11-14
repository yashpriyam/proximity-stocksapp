import React from "react";
import StockRow from "../stockrow/stockRow.component";
import { SimpleSpinner } from "../LoadingSpinner/loadingSpinner.component";
import "../stockwrapper/stockWrapper.style.scss";
import "./stockTable.style.css";

const StockTable = (props) => {
  const {
    filteredStockDataWithTimeStampArray,
    stockDataWithTimeStampCache,
    stockDataWithTimeStamp,
  } = props;

  const gainLossPercent = (SP, CP) => {
    let percentCalc;
    if (SP && CP) {
      percentCalc = (((SP - CP) / CP) * 100).toFixed(2);
    } else {
      percentCalc = 0;
    }
    return {
      percentCalc,
    };
  };

  return (
    <div className="stock-wrapper">
      <table className="label-table-row">
        <tbody>
          <tr>
            <td>Stock Name</td>
            <td>Last Update Time</td>
            <td>Current Price</td>
            <td>Percent Profit/Loss</td>
            <td>Options</td>
          </tr>
        </tbody>
      </table>
      <div className="stocks-table">
        <table>
          <tbody>
            {filteredStockDataWithTimeStampArray.length ? (
              filteredStockDataWithTimeStampArray.map((stock) => {
                const stockTimeStampArray = Object.keys(
                  stockDataWithTimeStampCache[stock]
                );

                const date1 = new Date(
                  Number(stockTimeStampArray[stockTimeStampArray.length - 1])
                );
                const date2 = new Date(
                  Number(stockTimeStampArray[stockTimeStampArray.length - 2])
                );
                const timeDifference = date1.getTime() - date2.getTime();
                const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
                const lastUpdatedAt = (time) => {
                  switch (true) {
                    case time <= 10000:
                      console.log(date1.toLocaleString());
                      return "A few seconds ago";
                    case time > 10000:
                      return date1.toLocaleTimeString();
                    case time > 10000 && daysDifference >= 1:
                      return date1.toLocaleString();
                    default:
                      return <SimpleSpinner />;
                  }
                };

                const { percentCalc } = gainLossPercent(
                  stockDataWithTimeStampCache[stock][
                    stockTimeStampArray[stockTimeStampArray.length - 1]
                  ],
                  stockDataWithTimeStampCache[stock][
                    stockTimeStampArray[stockTimeStampArray.length - 2]
                  ]
                );

                const currentStockPrice =
                  stockDataWithTimeStampCache[stock][
                    stockTimeStampArray[stockTimeStampArray.length - 1]
                  ];

                return (
                  <StockRow
                    formattedTime={lastUpdatedAt(timeDifference)}
                    percentCalc={percentCalc}
                    stock={stock}
                    currentStockPrice={currentStockPrice}
                    stockDataWithTimeStamp={stockDataWithTimeStamp}
                    key={stock}
                  />
                );
              })
            ) : (
              <tr key={"random 1"}>
                <td>
                  <SimpleSpinner />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTable;
