import addToCart from "./addToCart";

const initialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      imageUrl:
        "https://i.pinimg.com/564x/66/c6/e1/66c6e144cafc4268bb1ad756d7e2666f.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      imageUrl:
        "https://i.pinimg.com/enabled_lo/564x/cc/7a/b8/cc7ab8857629f0709bec54372a95bbc0.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      imageUrl:
        "https://i.pinimg.com/enabled_lo/564x/cc/7a/b8/cc7ab8857629f0709bec54372a95bbc0.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      imageUrl:
        "https://i.pinimg.com/enabled_lo/564x/cc/7a/b8/cc7ab8857629f0709bec54372a95bbc0.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      imageUrl:
        "https://i.pinimg.com/enabled_lo/564x/cc/7a/b8/cc7ab8857629f0709bec54372a95bbc0.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      imageUrl:
        "https://i.pinimg.com/enabled_lo/564x/cc/7a/b8/cc7ab8857629f0709bec54372a95bbc0.jpg",
    },
  ],
  carts: [],
};

const reducer = (state = initialState, action) => {
  // Gọi addToCart để xử lý hành động liên quan đến giỏ hàng
  const newCartState = addToCart({ carts: state.carts }, action);
  // Trả về state mới, bao gồm cả giỏ hàng và danh sách sản phẩm
  return {
    ...state,
    carts: newCartState.carts,
  };
};

export default reducer;
