const INITIAL_STATE = {
  text: "Hello",
  addTOCart: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      console.log("redux");
      return {
        ...state,
        addTOCart: [...state.addTOCart, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;
