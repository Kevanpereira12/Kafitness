"use client"
import React from 'react';

const Registro = () => {
  return (
    <div className="registro">
      <div className="seccion">
        <h2>Perfil</h2>
        {/* Campos de perfil (estatura, imc, etc.) */}
      </div>
      <div className="seccion">
        <h2>Horario</h2>
        {/* Campos de horario (turno, hora) */}
      </div>
      <div className="seccion">
        <h2>Membresía</h2>
        {/* Campos de membresía (fecha de pago, método, estado) */}
      </div>
      <div className="seccion">
        <h2>Rutinas</h2>
        {/* Bloques de rutinas */}
      </div>
      <div className="seccion">
        <h2>Plan Alimenticio</h2>
        {/* Cuadro de plan alimenticio (agregar, editar, eliminar) */}
      </div>
    </div>
  );
}

export default Registro;