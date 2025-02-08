import { useContext } from "react";
import { formatPrice } from "../utils/format";
import { useCart } from "../providers/CartProvider";
import { NavLink } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const Navbar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  const { token, logout } = useContext(UserContext);
  const { total } = useCart();
  const totalCart = total;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mía
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className={setActiveClass} to="/">
                <button className="btn active" aria-current="page" href="#">
                  <i className="fa-solid fa-pizza-slice"></i> Home
                </button>
              </NavLink>
            </li>
            {!token ? (
              <>
                <li className="nav-item" key="login">
                  <NavLink className={setActiveClass} to="/login">
                    <button className="btn active" href="#">
                      <i className="fa-regular fa-address-card"></i> Login
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item" key="register">
                  <NavLink className={setActiveClass} to="/register">
                    <button className="btn active" href="#">
                      <i className="fa-regular fa-address-card"></i> Register
                    </button>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item" key="profile">
                  <NavLink className={setActiveClass} to="/profile">
                    <button className="btn active">
                      <i className="fa-regular fa-user"></i> Profile
                    </button>
                  </NavLink>
                </li>
                <li className="nav-item" key="logout">
                  <button className="btn active" onClick={(e) => logout()}>
                    <i className="fa-solid fa-right-from-bracket"></i> Logout
                  </button>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            <NavLink className={setActiveClass} to="/Cart">
              <button className="btn active btnfos-5">
                <i className="fa-solid fa-cart-arrow-down"></i> total:
                {formatPrice(totalCart)}
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
