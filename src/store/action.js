const addProduct = (payload) => {
  return {
    type: "ADD_TO_CART",
    payload: payload,
  };
};

export { addProduct };
