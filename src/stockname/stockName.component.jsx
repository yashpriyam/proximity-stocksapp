import React from "react";

const StockName = (props) => {
  const { stockname } = props;
  return <td className="stock-name">{stockname.toUpperCase()}</td>;
};

export default StockName;
