import { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import { useParams } from "react-router-dom";

function Pizza() {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `http://localhost:5000/api/pizzas/${id}`;
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data);
    };
    getData();
  }, [id]);

  return (
    <>
      <Header />
      <ProductDetail
        desc={pizza?.desc}
        id={pizza?.id}
        name={pizza?.name}
        ingredients={pizza?.ingredients}
        price={pizza?.price}
        img={pizza?.img}
      />
    </>
  );
}

export default Pizza;
