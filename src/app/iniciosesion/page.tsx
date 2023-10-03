"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import "./stylei.css";
import styles from './styles.module.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Aquí podrías agregar la lógica de autenticación si es necesaria
    alert('¡Ingresar clickeado!');
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <div>
        <label>Nombre de Usuario:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <ul>
          <li>
            <Link href="/principalreg" className={styles.ingresarButton}>Ingresar
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p>¿No tienes una cuenta? <Link href="/registro">Regístrate aquí</Link></p>
      </div>
    </div>
  );
}

export default Login;
