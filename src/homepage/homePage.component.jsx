/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useContext } from "react";
import { AppStateContext } from "../appState/globalState.context";
import LogOutButton from "../users/logoutButton.component";
import StockWrapper from "../stockwrapper/stockWrapper.component";
import ChartView from "../chartview/chartView.component";
import StockHistoryTable from "../stockhistorytable/stockHistoryTable.component";
import WatchList from "../watchlist/watchList.component";
import "./homePage.style.css";

const HomePage = () => {
  const webSocket = useRef(null);
  const { stateAndDispatcher } = useContext(AppStateContext);
  const [appState, dispatch] = stateAndDispatcher;

  let updateState = [...appState];

  useEffect(() => {
    webSocket.current = new WebSocket(`ws://stocks.mnet.website`);
    webSocket.current.onopen = () => {
      console.log("connection opened");
    };
    webSocket.current.onerror = (msg) => {
      console.log(msg);
    }
    webSocket.current.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      updateState = data;
      dispatch({ type: "newPrices", value: updateState });
    };
    webSocket.current.onclose = () => {
      webSocket.current.close();
    };
    webSocket.current.onerror = (msg) => {
      console.log(msg);
    }
    return () => webSocket.current.close();
  }, []);

  return (
    <div>
      <LogOutButton />
      <div className="main">
        <div className="watchlist-history-container">
          <WatchList />
          <StockHistoryTable />
        </div>

        <div className="stockTable-container">
          <StockWrapper />
        </div>

        <div className="chartview-container">
          <ChartView />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
