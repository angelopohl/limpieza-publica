import React, {useState} from "react";
import ReporteLimpieza from "./ReporteLimpieza";
export default function PanelCiudadano({user, onLogout}) {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [reportes, setReportes] = useState([]);
    const agregarReporte = (nuevoReporte) =>{
        setReportes([...reportes, nuevoReporte]);
        setMostrarFormulario(false);
    };
    return(
        <div>
            <header>
                <h1>Panel del Ciudadano</h1>
                <h2>Bienvenido <strong>{user.email}</strong></h2>

                <button onClick={onLogout}>Salir</button>
                <button onClick={()=>setMostrarFormulario(true)}>Nuevo Reporte</button>
            </header>
                            {mostrarFormulario && (
                                <ReporteLimpieza onCancel={()=>setMostrarFormulario(false)} onSubmit={agregarReporte}/>)}

            <h3>Reportes Enviados:</h3>
            {reportes.length === 0 ? (<p>No has enviado reportes aún.</p>) : (
                <ul>
                    {reportes.map((rep, index)=>(
                        <li key={index}>
                            <strong>{rep.tipo}</strong> - {rep.description} <br />
                            Fecha: {rep.fecha} | Estado: {rep.estado}
                        </li>
                    ))}

                </ul>
            )}
        </div>
    );
}