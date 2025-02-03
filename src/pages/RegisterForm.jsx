import { useState } from "react";

const RegisterForm = () => {
  const [userData, setUserData] = useState(() => ({
    email: "",
    password: "",
    confirmPassword: "",
  }));

  const validate = () => {
    const { email, password, confirmPassword } = userData;

    if (
      email.trim() == "" ||
      password.trim() == "" ||
      confirmPassword.trim() == ""
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }
    if (password.length < 6) {
      alert("Tu contraseña debe tener al menos 6 carácteres");
      return;
    }
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden, intente nuevamente");
      return;
    }
    alert("Registro correcto");
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
      <h3>Registro</h3>
      <form className="formulario" onSubmit={validateForm}>
        <label htmlFor="register-email">Email</label>
        <input
          onChange={actualizarDatos}
          type="email"
          name="email"
          id="register-email"
        />
        <label htmlFor="register-password">Contraseña</label>
        <input
          onChange={actualizarDatos}
          type="password"
          name="password"
          id="register-password"
        />
        <label htmlFor="register-confirmPassword">Confirmar Contraseña</label>
        <input
          onChange={actualizarDatos}
          type="password"
          name="confirmPassword"
          id="register-confirmPassword"
        />
        <button className="btnfos-5 buttonCard" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
