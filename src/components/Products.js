import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { add, remove } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Image } from "react-bootstrap";

function Products() {
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    baseURL: "http://localhost:8081",
    headers: {
      "content-type": "application/json",
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await axiosInstance.get("/product/allProducts");
    setProducts(data.products);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="products-header">
        <h1>Products</h1>
        <div className="d-flex justify-content-start">
          <Button onClick={() => navigate("/cart")} className="m-2">
            Show cart
          </Button>
          <Button
            className="m-2"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </div>
      </div>
      <Container className="mt-5" fluid>
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id} className="m-2 product-tile">
              <Image
                className="products-img"
                src={product.thumbnail}
                alt={product.title}
              />
              <span className="title-price">
                <h5>{product.title}</h5>
                <b>${product.price}</b>
              </span>
              {cart.find((pro) => pro.id === product.id) ? (
                <button
                  className="remove-cart"
                  onClick={() => dispatch(remove(product.id))}
                >
                  Remove from cart
                </button>
              ) : (
                <button
                  onClick={() => dispatch(add(product))}
                  className="add-cart"
                >
                  Add to cart
                </button>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
