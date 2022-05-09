import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

export const DashBoard = () => {
  const { token, setToken } = useContext(AuthContext);
  if (!token) return <Navigate to="/login" replace />;
  return (
    <>
      <h1>DashBoard</h1>
      <button onClick={() => setToken(undefined)}>Cerrar Sesión</button>
    </>
  );
};
