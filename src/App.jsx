// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetail, ProductList, CartIcon, CartPage } from "./components";

const App = () => {
  return (
    <Router>
      <CartIcon />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/details/:productId" element={<ProductDetail />} />
        <Route path="/cartPage" element={<CartPage />} />
      </Routes>
    </Router>
  );
};

export default App;
