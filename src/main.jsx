import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./providers/CartProvider";
import PizzaProvider from "./providers/PizzaProvider";
import UserProvider from "./providers/UserProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <PizzaProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </PizzaProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>
);
