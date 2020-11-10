import React from "react";

const StockLastUpadateTime = (props) => {
  const { formattedTime } = props;
  return (
    <td>
      {formattedTime}
    </td>
  );
};

export default StockLastUpadateTime;
