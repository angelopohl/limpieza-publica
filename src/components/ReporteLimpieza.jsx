import React, { useState } from "react";

export default function ReporteLimpieza({ onCancel, onSubmit }) {
  const [tipo, setTipo] = useState("");
  const [description, setDescription] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tipo) {
      alert("Debes seleccionar un tipo de problema.");
      return;
    }
    if (!description.trim()) {
      alert("Debes escribir una descripción.");
      return;
    }

    

    console.log("Reporte enviado:", { tipo, description });

     const nuevoReporte = {
    tipo,
    description,
    fecha: new Date().toLocaleDateString(),
    estado: "Pendiente",
  };
   console.log("Nuevo reporte creado:", nuevoReporte);
      onSubmit(nuevoReporte);

  

    setMensaje("✅ Gracias por tu reporte, nos pondremos en contacto contigo pronto.");
    setTipo("");
    setDescription("");

  };







  return (
    <div>
      <h2>Registrar reporte de Limpieza</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tipo de Problema: </label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">--Selecciona un tipo--</option>
            <option value="barrido">Barrido</option>
            <option value="residuos">Residuos</option>
            <option value="maleza">Maleza</option>
          </select>
        </div>

        <div>
          <label>Descripción: </label>
          <br />
          <textarea
            value={description}
            placeholder="Describe el problema..."
            rows={4}
            cols={40}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <div>
            <button type="submit">Enviar Reporte</button>
            <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>
              Cancelar
            </button>
          </div>
        </div>
      </form>

      {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
    </div>
  );
}
