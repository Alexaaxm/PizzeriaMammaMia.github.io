import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
//import { pizzas, pizzaCart } from "../assets/pizzas";
import { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const url = "http://localhost:5000/api/pizzas";
  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row justify-content-around">
          {pizzas.map((pizza) => (
            <div className="col-sm-4">
              <CardPizza
                desc={pizza.desc}
                id={pizza.id}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={pizza.price}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
