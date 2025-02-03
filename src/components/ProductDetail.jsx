import { formatPrice } from "../utils/format";
import { useCart } from "../providers/CartProvider";

function ProductDetail({ pizza }) {
  const { addToCart } = useCart(pizza);
  return (
    <div className="productContainer">
      <div className="productColumn">
        <img
          src={pizza.img}
          className="imgProduct"
          alt="Esta es una imagen de pizza"
        />
      </div>
      <div className="productColumn">
        <h2 className="card-title">{pizza.name}</h2>
        <h4>{pizza.desc}</h4>
        <h5>Ingredientes: {pizza.ingredients + ","}</h5>
        <h3 className="list-group-item  ">
          Precio: {formatPrice(pizza.price)}
        </h3>
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
  );
}

export default ProductDetail;
