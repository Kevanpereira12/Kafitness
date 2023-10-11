"use client"
import React from 'react';
import Link from 'next/link';
import "./stylereg.css";
const Page = () =>{
  return(
    <div>
    <header>
    <a>Kafitness</a>
    <li><Link href="/perfil" className="linkEstilizado">Perfil</Link></li>
  </header>
  <main>
    <div className='img'>
      {}
      <img src="./imagenes/logoPrincipal.jpg" alt="Mi Imagen" />
    </div>
  </main>
  <footer>
  <nav>
    
    <ul className="miLista">
<li><Link href="/horario" className="linkEstilizado">Horario</Link></li>
<li><Link href="/ejercicios" className="linkEstilizado">Ejercicios</Link></li>
<li><Link href="/acercade" className="linkEstilizado">Acerca de</Link></li>
<li><Link href="/iniciosesion" className="linkEstilizado">inicio sesion</Link></li>
</ul>
    </nav>
  </footer>
</div>
  ) 
}

export default Page;