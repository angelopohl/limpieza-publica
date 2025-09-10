import React, { useState } from 'react';

export default function Login({onLogin}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e)=>{
            e.preventDefault();
            console.log("Email:", email)
            console.log("Contraseña:", password)
            onLogin(email, password)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Correo Electrónico:
                    </label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Ingresa tu email'/>
                </div>
                <div>
                    <label>
                        Contraseña:
                    </label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Ingresa tu Contraseña'/>
                </div>
                <button type='submit'>Ingresar</button>
            </form>
        </div>
    )
}
