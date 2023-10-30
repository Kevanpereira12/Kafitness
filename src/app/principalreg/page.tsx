"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import "./stylereg.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar los estilos de Bootstrap

const Page: React.FC = () => {
 

  return (
    <div>
      <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Kafitness</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/iniciosesion">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/acerdade">Acerca de Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perfil">Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/ejercicios">ejercicios</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      </header>
      <main>
        <div className="img">
          <img src="./imagenes/logoPrincipal.jpg" alt="Mi Imagen" />
        </div>
      </main>
      <footer>
        {/* Contenido del footer */}
      </footer>
    </div>
  );
};

export default Page;