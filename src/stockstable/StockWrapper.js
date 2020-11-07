import React, { useState, useEffect, useContext } from "react";
import "./StockWrapper.scss";
import UpArrow from "./up-chevron.svg";
import DownArrow from "./down-arrow.svg";
import moment from "moment";
import Chart from "../charts/chart";
import Modal from "react-modal";
import { AppStateContext } from "../appState/globalState.context";

const stockDataWithTimeStamp = {};
let stockDataWithTimeStampCache = {};
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const StockWrapper = () => {
  const { stateAndDispatcher } = useContext(AppStateContext);
  const [appState] = stateAndDispatcher;
  // const [onHoverRow, setOnHoverRow] = useState(true);
  const [chartVisible, setChartVisible] = useState(false);
  const [flicktheChanges, setFlickTheChanges] = useState(false);
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

  useEffect(() => {
    setFlickTheChanges(true);
    setTimeout(() => {
      setFlickTheChanges(false);
    }, 2000);
  }, [appState]);

  const gainLossPercent = (SP, CP) => {
    let percentCalc, profitOrLoss, difference;
    if (SP && CP) {
      percentCalc = (((SP - CP) / CP) * 100).toFixed(2);
      profitOrLoss = percentCalc > 0 ? "Profit" : "Loss";
      difference = (SP - CP).toFixed(2);
    } else {
      percentCalc = 0;
      profitOrLoss = 0;
      difference = 0;
    }

    return {
      percentCalc,
      profitOrLoss,
      difference,
    };
  };

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
        <h5>Stocks</h5>
        <div className="stock-wrapper">
          <div>
            <input placeholder='Search stocks here' onChange={onSearchChange} />
          </div>
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
                        stockTimeStampArray[stockTimeStampArray.length - 2] *
                          1000
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
                    <React.Fragment key={stock}>
                      <tr
                        id={stock}
                        // onMouseOver={() => {
                        //   // setOnHoverRow(true);
                        // }}
                      >
                        <td className="stock-name">{stock.toUpperCase()}</td>
                        <td>
                          <div>Last Updated At</div>
                          {formattedTime}
                        </td>
                        <td className={flicktheChanges ? "flickClass " : ""}>
                          $
                          {
                            stockDataWithTimeStampCache[stock][
                              stockTimeStampArray[
                                stockTimeStampArray.length - 1
                              ]
                            ]
                          }{" "}
                          USD
                        </td>
                        <td>
                          {percentCalc < 0 ? (
                            <img src={DownArrow} alt="down arrow" />
                          ) : (
                            <img src={UpArrow} alt="up arrow" />
                          )}
                        </td>
                        <td
                          className={
                            percentCalc > 0
                              ? "green-color"
                              : percentCalc === 0
                              ? "white-color"
                              : "red-color"
                          }
                        >
                          <b>{percentCalc}%</b>
                        </td>
                        <td>
                          <button
                            onClick={() => setChartVisible(!chartVisible)}
                          >
                            See Chart
                          </button>
                          <Modal
                            isOpen={chartVisible}
                            style={customStyles}
                            onRequestClose={() => setChartVisible(false)}
                          >
                            <Chart
                              name={stock}
                              priceData={stockDataWithTimeStamp[stock]}
                            />
                            {/* <button onClick={() => setChartVisible(!chartVisible)}>CLOSE</button> */}
                          </Modal>
                        </td>
                      </tr>
                    </React.Fragment>
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
    </>
  );
};

export default StockWrapper;

// EVI
// GOOG
// LNKD
// MSFT
// AAPL
// SHLD
// TCK
// EBR
// EVA
// YHOO
// INTC
// MU
// AKS
