import { useSelector } from "react-redux";

const getProducts = (state) => state.products;
const getCarts = (state) => state.carts;
export { getProducts, getCarts };
