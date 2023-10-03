"use client"
import React from 'react';
import "./styleh.css";
import Link from 'next/link';
const Page = () => {
  return (
    <div className="texto-centrado">
      <h1>Horario</h1>
      <div className="horarios-container">
        <p>Horarios de atención:</p>
        <ul>
          <li>Lunes a Viernes: 6:00am - 11:30am</li>
          <li>Lunes a Viernes: 3:00pm - 8:00pm</li>
          <p>Ubicación:</p>
      <p>Santa Lucia de Laurel, al frente de la escuela Santa Lucía</p>

      <p>Contacto:</p>
      <p>Teléfono: 8746 8125</p>

      <p>Otros detalles:</p>
      <p>Puedes elegir el horario que mas te convenga.</p>
        </ul>
      </div>
    <footer>
    <nav>
      
      <ul className="miLista">
  <li><Link href="/horario" className="linkEstilizado">Horario</Link></li>
  <li><Link href="/ejercicios" className="linkEstilizado">Ejercicios</Link></li>
  <li><Link href="/acercade" className="linkEstilizado">Acerca de</Link></li>
  <li><Link href="/iniciosesion" className="linkEstilizado">Iniciar sesión</Link></li>
</ul>
      </nav>
    </footer>
      
    </div>
  );
}

export default Page;