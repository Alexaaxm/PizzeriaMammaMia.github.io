import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas, pizzaCart } from "../assets/pizzas";

const Home = () => {
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
