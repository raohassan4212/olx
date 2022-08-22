function ADDProduct(val) {
  console.log(val)
  return (dispatch) => {
    dispatch({ type: "ADD_PRODUCT", payload: val });
  };
}

export { ADDProduct };
