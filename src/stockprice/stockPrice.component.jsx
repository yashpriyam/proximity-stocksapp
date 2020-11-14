import React, { useState, useEffect } from "react";
import "./stockPrice.style.css";

const StockPrice = (props) => {
  const { currentStockPrice } = props;

  const [flicktheChanges, setFlickTheChanges] = useState(false);
  useEffect(() => {
    setFlickTheChanges(true);
    setTimeout(() => {
      setFlickTheChanges(false);
    }, 2000);
  }, [currentStockPrice]);
  return (
    <td className={`${flicktheChanges ? "flickClass " : ""} stock-StockPrice`}>
      ${currentStockPrice}
    </td>
  );
};

export default StockPrice;
