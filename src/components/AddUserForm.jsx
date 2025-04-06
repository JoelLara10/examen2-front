import { useState } from "react";
import axios from "axios";

const AddUserForm = () => {
    const [name, setName] = useState("");  // Añadido para el nombre
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Enviar 'name', 'email' y 'password' como parte de la solicitud
            await axios.post("http://localhost:5000/users", { name, email, password });
            alert("Usuario agregado exitosamente");
            setName("");
            setEmail("");
            setPassword("");
        } catch (error) {
            alert("Error al agregar usuario");
        }
    };

    return (
        <div>
            <h2>Agregar Usuario</h2>
            <form onSubmit={handleSubmit}>
                {/* Campo para el nombre */}
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                {/* Campo para el correo electrónico */}
                <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                {/* Campo para la contraseña */}
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default AddUserForm;
