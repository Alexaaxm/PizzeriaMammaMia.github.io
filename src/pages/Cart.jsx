import { useState, useContext } from "react";
import { useCart } from "../providers/CartProvider";
import { formatPrice } from "../utils/format";
import { UserContext } from "../providers/UserProvider";
import { Link } from "react-router-dom";

const Cart = () => {
  const { token } = useContext(UserContext);
  const [checkoutStatus, setCheckoutStatus] = useState(null);
  const {
    total,
    cart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
    cleanCart,
    checkout,
  } = useCart();

  const doCheckout = async () => {
    const res = await checkout();
    if (res) {
      setCheckoutStatus("SUCCESS");
      cleanCart();
    } else {
      setCheckoutStatus("ERROR");
    }
  };

  return (
    <div className="cartContainer">
      <div className="cart" style={{ margin: "24px" }}>
        {checkoutStatus === null || checkoutStatus === "ERROR" ? (
          <>
            {checkoutStatus === "ERROR" && cart.length > 0 ? (
              <strong class="error">
                Hubo un problema al crear su pedido, intente más tarde
                nuevamente
              </strong>
            ) : null}
            <h3>Detalle del pedido:</h3>
            <ul className="listCard  ">
              {cart.map((cartPizza) => (
                <li className="col-sm-4 cart-item  " key={cartPizza.id}>
                  <img
                    className="cart-item"
                    style={{ width: "50px", margin: "8px" }}
                    src={cartPizza.img}
                    alt="imagen"
                  />
                  <h4 className="item-quantity">{cartPizza.name}</h4>

                  <b className="item-price">{formatPrice(cartPizza.price)}</b>
                  <button
                    className="btn-quantity item-quantity"
                    onClick={() => decreaseQuantity(cartPizza)}
                  >
                    -
                  </button>

                  <b>{cartPizza.count}</b>
                  <button
                    className="btn-quantity item-quantity"
                    onClick={() => increaseQuantity(cartPizza)}
                  >
                    +
                  </button>
                  <button
                    className="btn-remove"
                    onClick={() => removeFromCart(cartPizza.id)}
                  >
                    <i class="fa-solid fa-trash-can"></i>
                  </button>
                </li>
              ))}
            </ul>
            <h3>Total: {formatPrice(total)}</h3>
            {cart.length > 0 ? (
              <>
                <button
                  onClick={doCheckout}
                  disabled={!token}
                  className="btn-checkout item-quantity "
                >
                  Pagar
                </button>
                {token ? null : <p>Inicia sesión para continuar compra </p>}
              </>
            ) : (
              <Link to="/">
                <button>Añadir productos</button>
              </Link>
            )}

            {cart.length > 0 ? (
              <button className="btn-remove item-quantity " onClick={cleanCart}>
                Vaciar carro
              </button>
            ) : null}
          </>
        ) : checkoutStatus === "SUCCESS" ? (
          <>
            <h4>Pedido creado</h4>
            <p>
              Su pedido ha sido creado con éxito, y la boleta ha sido enviada a
              su correo electrónico
            </p>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
