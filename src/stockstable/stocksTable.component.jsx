import React from "react";
// import ChartView from "../chartview/chartView.component";
// import UpArrow from "../stockwrapper/up-chevron.svg";
// import DownArrow from "../stockwrapper/up-chevron.svg";
import "../stockwrapper/stockWrapper.style.scss";
import StockRow from "../stockrow/stockRow.component";
import "./stockTable.style.css";
// import { AppStateContext } from "../appState/globalState.context";

const StockTable = (props) => {
  const {
    filteredStockDataWithTimeStampArray,
    stockDataWithTimeStampCache,
    appState,
    stockDataWithTimeStamp,
  } = props;

  // const { watchListStockDataDispatcher } = useContext(AppStateContext)
  // const [watchListStockData, watchListStockDataReducer] = watchListStockDataDispatcher
  // // console.log(watchListStockData);
  //   const [flicktheChanges, setFlickTheChanges] = useState(false);
  //   const [chartVisible, setChartVisible] = useState(false);

  //   useEffect(() => {
  //     setFlickTheChanges(true);
  //     setTimeout(() => {
  //       setFlickTheChanges(false);
  //     }, 2000);
  //   }, [appState]);
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
              const lastUpdatedUnixTime = Math.abs(
                new Date(
                  stockTimeStampArray[stockTimeStampArray.length - 1] * 1000
                ) -
                  new Date(
                    stockTimeStampArray[stockTimeStampArray.length - 2] * 1000
                  )
              );
              const lastUpdated = new Date(lastUpdatedUnixTime * 1000);

              const hours = lastUpdated.getHours();
              const minutes = "0" + lastUpdated.getMinutes();
              const seconds = "0" + lastUpdated.getSeconds();
              const formattedTime =
                hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

              const { percentCalc } = gainLossPercent(
                stockDataWithTimeStampCache[stock][
                  stockTimeStampArray[stockTimeStampArray.length - 1]
                ],
                stockDataWithTimeStampCache[stock][
                  stockTimeStampArray[stockTimeStampArray.length - 2]
                ]
              );

              return (
                <StockRow
                  appState={appState}
                  formattedTime={formattedTime}
                  percentCalc={percentCalc}
                  stock={stock}
                  stockDataWithTimeStampCache={stockDataWithTimeStampCache}
                  stockTimeStampArray={stockTimeStampArray}
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
