import React from "react";
import "./stockLastUpadateTime.style.css";

const StockLastUpadateTime = (props) => {
  const { formattedTime } = props;
  return <td className="stock-StockLastUpadateTime">{formattedTime}</td>;
};

export default StockLastUpadateTime;
