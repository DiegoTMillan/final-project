import { Fragment } from "react";
import { Link } from "react-router-dom";
import "../components/LoginStyle.css";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";
import { useContext, useState } from "react";

export const Login = (props) => {
  const navigate = useNavigate();
  const { token, setToken } = useContext(AuthContext);
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const handleInputChange = (e) => {
    setFormValues((prev) => ({...prev, [e.target.name]: e.target.value}))
  }
  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        navigate("/dashboard", { replace: true });
      });
  };
  if (token) return <Navigate to="/dashboard" replace />;
  return (
    <Fragment>
      <div className=".center">
        <div className="card1">
          <i class="fa-solid fa-dice"></i>
          <h1>BG4Y</h1>
          <form onSubmit={handleOnSubmit}>
            <label htmlFor="email">Escribe tu email</label>
            <input
              id="email"
              className="input2"
              type="email"
              name="email"
              value={formValues.email}
              placeholder="Email"
              onChange={handleInputChange}
            />
            <label htmlFor="password" className="password">
              Escribe tu contraseña
            </label>
            <input
              id="password"
              className="input2"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
              value={formValues.password}
            />
            <div className="registeredLog">
              <p>¿No estás registrado?</p>
              <Link to="/register">Click aquí</Link>
            </div>
            <div className="button">
              <button type="submit">Iniciar Sesión</button>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};
