export const appState = [];

export const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "newPrices":
      state = action.value;
      return state;
    default:
      console.log("some error occurred");
  }
};
