const INITIAL_STATE = {
  text: "Hello",
  addTOCart: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        addTOCart: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
