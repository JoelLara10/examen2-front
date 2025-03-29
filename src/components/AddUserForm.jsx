import { useState } from "react";
import axios from "axios";

const AddUserForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/users/", { username, password });
            alert("Usuario agregado exitosamente");
            setUsername("");
            setPassword("");
        } catch (error) {
            alert("Error al agregar usuario");
        }
    };

    return (
        <div>
            <h2>Agregar Usuario</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default AddUserForm;
