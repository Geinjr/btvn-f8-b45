// src/components/CartIcon.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCarts } from "../../store";
import "./CartIcon.css"; // Nếu bạn muốn thêm CSS riêng cho CartIcon
import "@fortawesome/fontawesome-free/css/all.min.css";

const CartIcon = () => {
  const carts = useSelector(getCarts);

  // Tính tổng số lượng sản phẩm trong giỏ
  const totalQuantity = carts.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon">
      <Link to="/cartPage">
        <i className="fa-solid fa-cart-shopping"></i>
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
        )}
      </Link>
    </div>
  );
};

export default CartIcon;
