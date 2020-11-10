import React, { useState, useEffect } from "react";
// import { AppStateContext } from "../appState/globalState.context"


const StockPrice = (props) => {
  const { currentStockPrice } = props;
//   const { watchListStockDataDispatcher } = useContext(AppStateContext)
//   const [watchListStockData, watchListStockDataReducer] = watchListStockDataDispatcher
//   // console.log(watchListStockData);

  const [flicktheChanges, setFlickTheChanges] = useState(false);
//   watchListStockDataReducer({type: 'update', value: currentStockPrice})
  useEffect(() => {
    setFlickTheChanges(true);
    setTimeout(() => {
      setFlickTheChanges(false);
    }, 2000);
  }, [currentStockPrice]);
  return (
    <td className={flicktheChanges ? "flickClass " : ""}>
      ${currentStockPrice} USD
    </td>
  );
};

export default StockPrice;
