import React from "react";

const StockTrendPercent = (props) => {
  const { percentCalc } = props;
  return (
    <td
      className={
        percentCalc > 0
          ? "green-color"
          : percentCalc < 0
          ? "red-color"
          : "white-color"
      }
    >
      <b>{percentCalc}%</b>
    </td>
  );
};

export default StockTrendPercent;
