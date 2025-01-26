import { Link } from "react-router-dom";
const CardPizza = ({ id, name, price, ingredients, img }) => {
  const formatPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);

  return (
    <>
      <div className="card m-3" style={{ margin: "0 24px" }}>
        <img
          src={img}
          className="card-img-top"
          alt="Esta es una imagen de pizza"
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
        </div>
        <ul className="list-group list-group-flush p-2">
          <h5>Ingredientes:</h5>
          {ingredients.map((ingrediente) => (
            <li> {ingrediente} </li>
          ))}
        </ul>
        <ul className="list-group list-group-flush">
          <li className="list-group-item  ">Precio: {formatPrice}</li>
        </ul>
        <div className="card-body color-prueba">
          <Link to={`/pizza/${id}`}>
            <button href="#" className="card-link buttonCard btnfos-5 ">
              ver más
            </button>
          </Link>
          <button href="#" className="card-link buttonCard btnfos-5 ">
            <i className="fa-solid fa-cart-arrow-down"></i> añadir
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPizza;
