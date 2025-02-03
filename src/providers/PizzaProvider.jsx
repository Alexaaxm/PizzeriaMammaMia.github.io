import {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
} from "react";

export const PizzaContext = createContext({});

const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState({});

  const getPizza = useCallback(async (id) => {
    const url = `http://localhost:5000/api/pizzas/${id}`;
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setPizzas((currentPizzas) => ({
        ...currentPizzas,
        [id]: data,
      }));
      return data;
    };
    const result = await getData();
    return result;
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        getPizza,
        pizzas,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export const usePizzas = () => {
  return useContext(PizzaContext);
};

export const usePizza = (id) => {
  const { pizzas, getPizza } = useContext(PizzaContext);

  useEffect(() => {
    getPizza(id);
  }, [id]);

  const pizza = pizzas[id];

  return pizza;
};

export default PizzaProvider;
