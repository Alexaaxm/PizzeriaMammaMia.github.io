function ProductDetail({ name, price, ingredients, img, desc }) {
  const formatPrice = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(price);

  return (
    <div className="productContainer">
      <div className="productColumn">
        <img
          src={img}
          className="imgProduct"
          alt="Esta es una imagen de pizza"
        />
      </div>
      <div className="productColumn">
        <h2 className="card-title">{name}</h2>
        <h4>{desc}</h4>
        <h5>Ingredientes: {ingredients + ","}</h5>
        <h3 className="list-group-item  ">Precio: {formatPrice}</h3>
        <button>Añadir</button>
      </div>
    </div>
  );
}

export default ProductDetail;
