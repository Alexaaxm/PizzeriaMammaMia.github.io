import React, { createContext, useEffect, useState, useContext } from "react";

export const CartContext = createContext();

const getTotal = (cart) => {
  let total = 0;
  for (let item of cart) {
    total += item.price * item.count;
  }
  return total;
};

const getTotalItemsInCart = (cart) => {
  let total = 0;
  for (let item of cart) {
    total += item.count;
  }
  return total;
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (pizza) => {
    setCart((currentCart) => {
      const index = currentCart.findIndex((item) => {
        return item.id === pizza.id;
      });

      if (index >= 0) {
        const itemInCart = currentCart[index];
        const item = {
          ...itemInCart,
          count: itemInCart.count + 1,
        };
        const newCart = [...currentCart];
        newCart[index] = item;
        return newCart;
      }
      const newCart = [...currentCart, { ...pizza, count: 1 }];
      return newCart;
    });
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => {
      return currentCart.filter((item) => {
        return item.id !== id;
      });
    });
  };

  const cleanCart = () => {
    setCart([]);
  };

  const updateQuantity = (id, count) => {
    const newCart = [...cart];
    const index = newCart.findIndex((item) => item.id === id);
    newCart[index].count = count;
    setCart(newCart);
  };

  const increaseQuantity = (item) => {
    console.log("increase quantity");
    updateQuantity(item.id, item.count + 1);
  };

  const decreaseQuantity = (item) => {
    if (item.count === 0) {
      return;
    }
    updateQuantity(item.id, item.count - 1);
  };

  useEffect(() => {
    setTotalItemsInCart(getTotalItemsInCart(cart));
    setTotal(getTotal(cart));
  }, [cart]);

  const checkout = async () => {
    let data;

    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          cart,
        }),
      });
      data = await response.json();
      if (data.error) {
        return false;
      } else {
        return true;
      }
    } catch (e) {
      return false;
    }
  };

  return (
    <CartContext.Provider
      value={{
        decreaseQuantity,
        increaseQuantity,
        cart,
        addToCart,
        removeFromCart,
        cleanCart,
        total,
        totalItemsInCart,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
