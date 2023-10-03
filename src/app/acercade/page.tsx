import React from 'react';
import "./stylead.css";
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <div className="container">
      <h1 className="tituloCentrado">Acerca de</h1>
      <div className="reseñaEmpresa">
        <p>Kafitness es un pequeño centro de acondicionamiento físico ubicado en Santa Lucía de Laurel.</p>
      </div>
      <div className="terminosCondiciones">
        {/* Espacio para términos y condiciones */}
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
