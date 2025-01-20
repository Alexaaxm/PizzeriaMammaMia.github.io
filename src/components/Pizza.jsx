import { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import ProductDetail from "./ProductDetail";

function Pizza() {
  const [pizza, setPizza] = useState({});

  const url = "http://localhost:5000/api/pizzas/p001";
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizza(data);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
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
    </>
  );
}

export default Pizza;
