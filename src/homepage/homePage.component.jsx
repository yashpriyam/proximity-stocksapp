/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useContext, useState } from "react";
import { AppStateContext } from "../appState/globalState.context";
import LogOutButton from "../users/logoutButton.component";
import StockWrapper from "../stockwrapper/stockWrapper.component";
import ChartView from "../chartview/chartView.component";
import StockHistoryTable from "../stockhistorytable/stockHistoryTable.component"
import WatchList from "../watchlist/watchList.component"
import ChartVisibilityContext from "../localcontexts/chartVisibility.context"
import StockHistoryVisibilityContext from "../localcontexts/stockHistoryVisibility.context"
import "./homePage.style.css";

const HomePage = () => {
  const webSocket = useRef(null);
  const { stateAndDispatcher } = useContext(AppStateContext);
  const [appState, dispatch] = stateAndDispatcher;
  

  // // console.log(`appState: ${appState}`);
  let updateState = [...appState];
  const [chartVisible, setChartVisible] = useState(false)
  const [stockHistoryVisible, setStockHistoryVisible] = useState(false)

  useEffect(() => {
    webSocket.current = new WebSocket(`ws://stocks.mnet.website`);
    webSocket.current.onopen = () => {
      console.log("connection opened");
    };
    webSocket.current.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      updateState = data;
      dispatch({ type: "newPrices", value: updateState });
    };
    webSocket.current.onclose = () => {
      webSocket.current.close();
    };
    return () => webSocket.current.close();
  }, []);

  return (
    <div>
      <LogOutButton />
      <div className="main">
        <StockHistoryVisibilityContext.Provider value={{
          stockHistoryVisible,
          setStockHistoryVisible
        }}>
          <div className='watchlist-history-container'>
          <WatchList/>
        {stockHistoryVisible && <StockHistoryTable/>}
          </div>
        
        <ChartVisibilityContext.Provider value={{
          chartVisible,
          setChartVisible
        }}>
          <div className='stockTable-container'>
          <StockWrapper />
          </div>
          
        
        <div className='chartview-container'>
        {chartVisible && <ChartView />}
        </div>
        </ChartVisibilityContext.Provider>
        </StockHistoryVisibilityContext.Provider>
      </div>
    </div>
  );
};

export default HomePage;
