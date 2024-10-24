import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./productList.css";
import { getProducts, addProduct } from "../../store";

const ProductList = () => {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    const cartItem = {
      productId: product.id,
      quantity: 1, // Giả sử số lượng là 1
    };
    dispatch(addProduct(cartItem));
  };

  const handleViewDetails = (productId) => {
    navigate(`/details/${productId}`);
  };

  return (
    <div className="product-list-container">
      <h1>Product List</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-actions">
              <button onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
              <button onClick={() => handleViewDetails(product.id)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
