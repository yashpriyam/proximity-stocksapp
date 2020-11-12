import React from "react";
import "../stockwrapper/stockWrapper.style.scss";
import StockRow from "../stockrow/stockRow.component";
import "./stockTable.style.css";

const StockTable = (props) => {
  const {
    filteredStockDataWithTimeStampArray,
    stockDataWithTimeStampCache,
    // appState,
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
                // const lastUpdatedUnixTime = Math.abs(
                //   new Date(
                //     Number(
                //       stockTimeStampArray[stockTimeStampArray.length - 1] * 1000
                //     )
                //   ) -
                //     new Date(
                //       Number(
                //         stockTimeStampArray[stockTimeStampArray.length - 2] *
                //           1000
                //       )
                //     )
                // );

                const date1 = new Date(
                  Number(stockTimeStampArray[stockTimeStampArray.length - 1])
                );
                const date2 = new Date(
                  Number(stockTimeStampArray[stockTimeStampArray.length - 2])
                );
                const timeDifference = date1.getTime() - date2.getTime();
                // const daysDifference = timeDifference/(1000*60*60*24)
                console.log(date1, date2, timeDifference);
                // const lastUpdatedAt = Number(timeDifference) > 5000 ? "A few seconds ago" :
                const lastUpdatedAt = (timeDifference) => {
                  switch (lastUpdatedAt) {
                    case Number(timeDifference) <= 5000:
                      return "A few seconds ago";
                    case Number(timeDifference) > 5000 &&
                      Number(timeDifference) < 60000:
                      return `Updated ${Number(timeDifference)} seconds ago`;
                    case Number(timeDifference) >= 60000 &&
                      Number(timeDifference) < 3600000:
                      return `${Number(timeDifference) / 1000 / 60}`;
                    default:
                      return "record not available";
                  }
                }
                
                // const lastUpdated = new Date(lastUpdatedAt(timeDifference));

                // const hours = lastUpdated.getHours();
                // const minutes = "0" + lastUpdated.getMinutes();
                // const seconds = "0" + lastUpdated.getSeconds();
                // const formattedTime =
                //   hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

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
                  />
                );
              })
            ) : (
              <tr key={"random 1"}>
                <td>Please wait while stocks load.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockTable;
