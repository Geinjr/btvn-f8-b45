// src/components/ProductDetails.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./productsDetail.css";
import { getProducts } from "../../store";
const ProductDetails = () => {
  const { productId } = useParams(); // Lấy productId từ URL

  // Lấy danh sách products từ store
  const products = useSelector(getProducts);

  // Tìm sản phẩm có id tương ứng
  const product = products.find((p) => p.id === Number(productId));

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Chuyển hướng về trang ProductList
  };

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} />
      <p> {product.name}</p>

      <button className="back-button" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default ProductDetails;
