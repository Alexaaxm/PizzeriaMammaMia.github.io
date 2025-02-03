import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import { useParams } from "react-router-dom";
import { usePizza } from "../providers/PizzaProvider";

function Pizza() {
  const { id } = useParams();
  const pizza = usePizza(id);

  return (
    <>
      <Header />
      {pizza ? <ProductDetail pizza={pizza} /> : null}
    </>
  );
}

export default Pizza;
