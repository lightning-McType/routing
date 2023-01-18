import { useSelector } from "react-redux";
import { Image } from "react-bootstrap";

function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <h1>Cart</h1>
      <div className="m-2 d-flex flex-column">
        {cart.map((product) => (
          <div
            className="mb-2 d-flex justify-content-between cart-item-tile"
            key={product.id}
          >
            <div>
              <Image
                fluid
                className="cart-img"
                src={product.thumbnail}
                alt={product.title}
              />
              <h5 className="mt-2">{product.title}</h5>
            </div>
            <h4 className="mt-4">${product.price}</h4>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
