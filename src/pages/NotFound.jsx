import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>404</h2>
      <p>La página que intentas solicitar no esta en el servidor(Error 404).</p>
      Para volver a la página principal ingresa aquí:
      <Link to="/">
        <a>HOME</a>
      </Link>
    </>
  );
};

export default NotFound;
