"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import "./stylei.css";
import styles from './styles.module.css';
import InicioSesionPage from "./iniciosesionPage";

const Login = () => {
  return (
    <div>
      <h1>Página de Inicio de Sesión</h1>
      <InicioSesionPage />
    </div>
  );
};

export default Login;
