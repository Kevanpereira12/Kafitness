"use client"
import Image from 'next/image'
import React from 'react';
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    <div>
      <header>
      <nav>
      
      <ul className="miLista">
  <li><Link href="/horario" className="linkEstilizado">Horario</Link></li>
  <li><Link href="/ejercicios" className="linkEstilizado">Ejercicios</Link></li>
  <li><Link href="/galeria" className="linkEstilizado">Galeria</Link></li>
  <li><Link href="/acercade" className="linkEstilizado">Acerca de</Link></li>
  <li><Link href="/iniciosesion" className="linkEstilizado">Iniciar sesión</Link></li>
</ul>
      </nav>
    </header>
    <main>
      <div className='img'>
        {}
        <img src="./imagenes/logoPrincipal.jpg" alt="Mi Imagen" />
      </div>
    </main>
    <footer>
      Kafitness 2023
    </footer>
  </div>
    
  );
};