"use client"

import React, { useState } from 'react';
import "./perfil.css";
import PerfilPage from "./perfilPage";

const Page = () => {
  return (
    <div className="registro">
      <PerfilPage />
      
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

export default Page;

