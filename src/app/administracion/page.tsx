"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


interface PageProps {}

const Page: React.FC<PageProps> = () => {
  return (
    <div >
      
      <header>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="#">Kafitness</a>
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
        <div className="overlay">
            <h1 className="titleadmin">Administración</h1>
           
          </div>
          <div className="background">
      </div>
       
        <h1 className="secund-text" >
           Membresías
        </h1>
        
       
      </main>

      <footer>
        Kafitness.com
      </footer>
     
    </div>
  );
};

export default Page;