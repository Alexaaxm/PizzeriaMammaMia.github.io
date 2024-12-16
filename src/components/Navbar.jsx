import Header from "./Header";

const Navbar = () => {
  const total = 25000;
  const token = false;
  const formatearTotal = new Intl.NumberFormat("es").format(total);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
              <button className="btn active" aria-current="page" href="#">
                <i className="fa-solid fa-pizza-slice"></i> Home
              </button>
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
                  <button className="btn active" href="#">
                    <i className="fa-regular fa-address-card"></i> Login
                  </button>
                </li>
                <li className="nav-item" key="register">
                  <button className="btn active" href="#">
                    <i className="fa-regular fa-address-card"></i> Register
                  </button>
                </li>
              </>
            )}
          </ul>
          <div className="d-flex">
            <button className="btn btn-outline-success" type="">
              <i className="fa-solid fa-cart-arrow-down"></i> total: $
              {formatearTotal}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
