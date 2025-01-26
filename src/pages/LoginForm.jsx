import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [userData, setUserData] = useState(() => ({
    email: "",
    password: "",
  }));

  const validate = () => {
    const { email, password } = userData;

    if (email.trim() == "" || password.trim() == "") {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (password.length < 6) {
      alert("Tu contraseña debe tener al menos 6 carácteres");
      return;
    }

    alert("Login correcto");
  };
  function validateForm(event) {
    event.preventDefault();
    validate();
  }
  function actualizarDatos(e) {
    setUserData((prevData) => {
      const newData = {
        ...prevData,
        [e.target.name]: e.target.value,
      };
      return newData;
    });
  }

  return (
    <div className="containerForm">
      <h3>Login</h3>
      <form className="formulario" onSubmit={validateForm}>
        <label htmlFor="login-email">Email</label>
        <input
          onChange={actualizarDatos}
          type="email"
          name="email"
          id="login-email"
        />
        <label htmlFor="login-password">Contraseña</label>
        <input
          onChange={actualizarDatos}
          type="password"
          name="password"
          id="login-password"
        />
        <Link to="/profile">
          <button type="submit">Ingresar</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
