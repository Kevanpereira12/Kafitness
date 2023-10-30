"use client"
// src/components/Registro.js
import React, { useState } from 'react';
import "./registro.css";
import Link from 'next/link';

const Registro = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    correo: '',
    telefono: '',
    usuario: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu backend o realizar alguna acción con ellos
    console.log(formData);
  };

  return (
    
    <div className="registro">
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="primerApellido">Primer Apellido:</label>
          <input
            type="text"
            id="primerApellido"
            name="primerApellido"
            value={formData.primerApellido}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="segundoApellido">Segundo Apellido:</label>
          <input
            type="text"
            id="segundoApellido"
            name="segundoApellido"
            value={formData.segundoApellido}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Número de Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="usuario">Nombre de Usuario:</label>
          <input
            type="text"
            id="usuario"
            name="usuario"
            value={formData.usuario}
            onChange={handleChange}
            required
          />
        </div>
        <Link href="/registro"> <button type="submit">  Registrarse</button> </Link> 
      </form>
    </div>
    
  );
};

export default Registro;
