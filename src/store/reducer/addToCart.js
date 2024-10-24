const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.carts.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItem) {
        // Nếu sản phẩm đã có trong giỏ hàng, tăng số lượng
        return {
          ...state,
          carts: state.carts.map((item) =>
            item.productId === existingItem.productId
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        // Nếu sản phẩm chưa có, thêm mới vào giỏ hàng
        return {
          ...state,
          carts: [...state.carts, action.payload],
        };
      }
    }
    default:
      return state;
  }
};

export default reducer;
