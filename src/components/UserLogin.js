import Login from "./Login";
import Signup from "./Signup";
import Products from "./Products";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Cart from "./Cart";

function UserLogin() {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default UserLogin;
