import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    axios.post("http://localhost:5000/login", { email, password })
      .then(response => {
        const { token } = response.data;
        localStorage.setItem("jwt_token", token);
        window.location.href = "/users";  // Redirige a la página de usuarios
      })
      .catch(error => {
        setError("Error al iniciar sesión");
        console.error(error);
      });
  };
  

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Correo electrónico" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Contraseña" 
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Login;
