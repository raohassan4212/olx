const INITIAL_STATE = {
  text: "Hello",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CHECK":
      break;

    default:
      return state;
  }
};

export default reducer;
