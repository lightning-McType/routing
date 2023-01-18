import Products from "./Products";
import Cart from "./Cart";
import { Routes, Route } from "react-router-dom";

function ShoppingApp() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default ShoppingApp;
