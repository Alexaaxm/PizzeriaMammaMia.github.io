import { Link } from "react-router-dom";
import { formatPrice } from "../utils/format";
import { useCart } from "../providers/CartProvider";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useCart();

  return (
    <>
      <div className="card m-3" style={{ margin: "0 24px" }}>
        <img
          src={pizza.img}
          className="card-img-top"
          alt="Esta es una imagen de pizza"
        />
        <div className="card-body">
          <h4 className="card-title">{pizza.name}</h4>
        </div>
        <ul className="list-group list-group-flush p-2">
          <h5>Ingredientes:</h5>
          {pizza.ingredients.map((ingrediente) => (
            <li> {ingrediente} </li>
          ))}
        </ul>
        <ul className="list-group list-group-flush">
          <li className="list-group-item  ">
            Precio: {formatPrice(pizza.price)}
          </li>
        </ul>
        <div className="card-body color-prueba">
          <Link to={`/pizza/${pizza.id}`}>
            <button href="#" className="card-link buttonCard btnfos-5 ">
              ver más
            </button>
          </Link>
          <button
            onClick={() => {
              addToCart(pizza);
              alert("Se ha añadido al carro!");
            }}
            href="#"
            className="card-link buttonCard btnfos-5 "
          >
            <i className="fa-solid fa-cart-arrow-down"></i> añadir
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPizza;
