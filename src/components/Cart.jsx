import { useState } from "react";
import { pizzaCart } from "../assets/pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const updateQuantity = (id, count) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    newCart[index].count = count;
    setCart(newCart);
  };

  const increaseQuantity = (item) => {
    updateQuantity(item.id, item.count + 1);
  };

  const decreaseQuantity = (item) => {
    if (item.count === 0) {
      return;
    }
    updateQuantity(item.id, item.count - 1);
  };

  const getTotal = () => {
    let total = 0;
    for (let item of cart) {
      total += item.price * item.count;
    }
    return total;
  };

  const formatPrice = (cartItem) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(cartItem.price);
  };

  return (
    <div style={{ margin: "24px" }}>
      <h3>Detalle del pedido:</h3>
      <ul className="containerCard ">
        {cart.map((cartPizza) => (
          <li className="col-sm-4  " key={cartPizza.id}>
            <img
              style={{ width: "50px", margin: "8px" }}
              src={cartPizza.img}
              alt="imagen"
            />
            {cartPizza.name}
            <b>{formatPrice(cartPizza)}</b>
            <button
              className="buttonCard"
              onClick={() => decreaseQuantity(cartPizza)}
            >
              -
            </button>

            <b>{cartPizza.count}</b>
            <button
              className="buttonCard"
              onClick={() => increaseQuantity(cartPizza)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: {getTotal()}</h3>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;
