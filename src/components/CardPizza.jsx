const CardPizza = ({ name, price, ingredients, img }) => {
  const ingredientsLine = ingredients.join(", ");
  const formatPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);

  return (
    <>
      <div className="card" style={{ margin: "0 24px" }}>
        <img
          src={img}
          className="card-img-top"
          alt="Esta es una imagen de pizza"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Ingredientes:
            <br /> <p className="card-text">{ingredientsLine}</p>
          </li>
          <li className="list-group-item">Precio: {formatPrice}</li>
        </ul>
        <div className="card-body">
          <button href="#" className="card-link">
            ver más
          </button>
          <button href="#" className="card-link">
            <i class="fa-solid fa-cart-arrow-down"></i> añadir
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPizza;
