import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProducts, getCarts } from "../../store";

import "./cartPage.css"; // Nếu có file CSS riêng cho CartPage

const CartPage = () => {
  const carts = useSelector(getCarts); // Lấy carts từ Redux
  const products = useSelector(getProducts); // Lấy products từ Redux

  // Tạo một object để dễ dàng lấy thông tin sản phẩm theo productId
  const productMap = products.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
  }, {});

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Chuyển hướng về trang ProductList
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {carts.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {carts.map((cartItem) => {
            const product = productMap[cartItem.productId];
            return (
              <div key={product.id} className="cart-item">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="cart-item-image"
                />
                <h2 className="cart-item-name">{product.name}</h2>
                <p className="cart-item-quantity">
                  Quantity: {cartItem.quantity}
                </p>
              </div>
            );
          })}
        </div>
      )}
      <button className="back-button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default CartPage;
