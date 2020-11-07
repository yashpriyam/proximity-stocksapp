/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useContext } from "react";
import { AppStateContext } from "../appState/globalState.context";
import LogOutButton from "../users/logoutButton.component";

const HomePage = () => {
  const webSocket = useRef(null);
  const { stateAndDispatcher } = useContext(AppStateContext);
  const [ appState, dispatch ] = stateAndDispatcher;


  console.log(`appState: ${appState}`);
  let updateState = [...appState];


  useEffect(() => {
    webSocket.current = new WebSocket(`wss://stocks.mnet.website`);
    webSocket.current.onopen = () => {
      console.log("connection opened");
    };
    webSocket.current.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      updateState = data;
      console.log(`data from wss: ${data}`);
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
    </div>
  );
};

export default HomePage;
