import React from "react";
import UpArrow from "./up-chevron.svg";
import DownArrow from "./down-arrow.svg";

const StockTrendArrow = (props) => {
  const { percentCalc } = props;
  return (
    <td>
      {percentCalc < 0 ? (
        <img src={DownArrow} alt="down arrow" />
      ) : (
        <img src={UpArrow} alt="up arrow" />
      )}
    </td>
  );
};

export default StockTrendArrow;
