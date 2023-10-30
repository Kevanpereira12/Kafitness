"use client"

import Link from 'next/link';
import "./globals.css";
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <div >
      
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">MiSitio</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link" href="/iniciosesion">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/acercade">Acerca de nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/horarios">Nuestros Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ejercicios">Ejercicios</a>
        </li>
      </ul>
    </div>
</nav>

      </header>
     
      <main>
        <div><div className="overlay">
            <h1 className="welcome-text">Bienvenidos a nuestro sitio web</h1>
           
          </div>
          <div className="background">
      </div>
       
        <h1 className="secund-text" >
           Aquí podrás encontrar todo acerca de nosotros
        </h1>
        <a href="/registro"> Regístrate aquí</a>
        </div>
        <div className="img2">
          <img src="./imagenes/gim1.jpeg" alt="imagen del gimnasio" />
        </div>
        <div>
        <h1 className="secund-text" >
           Estamos ubicados en Santa Lucía de Laurel
        </h1>
        </div>
        <div className="img2">
          <img src="./imagenes/gim2.jpeg" alt="imagen del gimnasio" />
        </div>

        <h1 className="secund-text" >
           Abierto: De Lunes a Viernes
        </h1>
        <div className="img2">
          <img src="./imagenes/gim3.jpeg" alt="imagen del gimnasio" />
          
        </div>
       
      </main>

      <footer>
        Kafitness.com
      </footer>
     
    </div>
  );
};

export default Page;