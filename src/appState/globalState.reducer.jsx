export const appState = [];

export const reducer = (state, action) => {
  // // console.log(state);
  switch (action.type) {
    case "newPrices":
      state = action.value;
      return state;
    default:
      console.log("some error occurred");
  }
};

export const stockNameForChart = "";
export const stockNameForChartReducer = (state, action) => {
  state = action;
  return state;
};

export const priceDataArrayForChart = [];
export const priceDataArrayForChartReducer = (state, action) => {
  state = action;
  return state;
};

export const stockHistory = {};
export const stockHistoryReducer = (state, action) => {
  state = action;
  return state;
};

export const watchListStockData = {};
export const watchListStockDataReducer = (state, action) => {
  const { stock } = action.value;
  switch (action.type) {
    case "add":
      state[stock] = action.value;
      break;
    default:
      console.log("some error occurred");
  }
  return state;
};
