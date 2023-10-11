"use client"
import React from 'react';
import "./perfil.css"

const Registro = () => {
  return (
    <div className="registro">
      <div className="seccion">
        <h2>Perfil</h2>
        <div>
          <h3>Estatura</h3>
          <input type="text" placeholder="Estatura" />
        </div>
        <div>
          <h3>IMC</h3>
          <input type="number" placeholder="IMC" />
        </div>
        <div>
          <h3>Medida cuello</h3>
          <input type="text" placeholder="Medida cuello" />
        </div>
        <div>
          <h3>Medida pecho</h3>
          <input type="text" placeholder="Medida pecho" />
        </div>
        <div>
          <h3>Medida brazo izquierdo</h3>
          <input type="text" placeholder="Medida brazo izquierdo" />
        </div>
        <div>
          <h3>Medida brazo derecho</h3>
          <input type="text" placeholder="Medida brazo derecho" />
        </div>
        <div>
          <h3>Medida abdomen</h3>
          <input type="text" placeholder="Medida abdomen" />
        </div>
        <div>
          <h3>Medidas glúteos</h3>
          <input type="text" placeholder="Medidas glúteos" />
        </div>
        <div>
          <h3>Medida pierna izquierda</h3>
          <input type="text" placeholder="Medida pierna izquierda" />
        </div>
        <div>
          <h3>Medida pierna derecha</h3>
          <input type="text" placeholder="Medida pierna derecha" />
        </div>
      </div>
      <div className="seccion">
        <h2>Horario</h2>
        <select name="turno">
          <option value="mañana">Mañana</option>
          <option value="tarde">Tarde</option>
          <option value="noche">Noche</option>
        </select>
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
