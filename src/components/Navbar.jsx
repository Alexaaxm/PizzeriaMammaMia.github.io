import { Link } from "react-router-dom";
import { formatPrice } from "../utils/format";
import { useCart } from "../providers/CartProvider";

const Navbar = () => {
  const { total } = useCart();
  const totalCart = total;

  const token = false;

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
              <Link to="/">
                <button className="btn active" aria-current="page" href="#">
                  <i className="fa-solid fa-pizza-slice"></i> Home
                </button>
              </Link>
            </li>
            {token ? (
              <>
                <li className="nav-item" key="profile">
                  <button className="btn active" href="#">
                    <i className="fa-regular fa-user"></i> Profile
                  </button>
                </li>
                <li className="nav-item" key="logout">
                  <button className="btn active" href="#">
                    <i className="fa-solid fa-right-from-bracket"></i> Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item" key="login">
                  <Link to="/login">
                    <button className="btn active" href="#">
                      <i className="fa-regular fa-address-card"></i> Login
                    </button>
                  </Link>
                </li>
                <li className="nav-item" key="register">
                  <Link to="/register">
                    <button className="btn active" href="#">
                      <i className="fa-regular fa-address-card"></i> Register
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            <Link to="/Cart">
              <button className="btn active btnfos-5">
                <i className="fa-solid fa-cart-arrow-down"></i> total:
                {formatPrice(totalCart)}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
