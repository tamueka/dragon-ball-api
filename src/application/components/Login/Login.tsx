import { useState } from "react";
import "./Login.css";

export const Login: React.FC = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (user === "" && password === "") {
      setError("Todos los campos son obligatorios");
      return;
    }
    setError("");
    if (user === "admin" && password === "admin") {
      console.log("Login correcto");
    }
  };

  return (
    <form className="form-inline">
      <label htmlFor="email">Usuario</label>
      <input
        type="email"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Usuario"
      ></input>

      <label htmlFor="contraseña">Contraseña </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      ></input>

      <button type="submit" onClick={handleLogin}>
        Sign in
      </button>

      <p className="error">{error}</p>
    </form>
  );
};
