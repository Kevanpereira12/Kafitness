"use client"
import React, { useState } from 'react';
import "./style.css";
import Link from 'next/link';

interface Ejercicio {
    nombre: string;
    descripcion: string;
}

const Page = () => {
    const [ejercicios] = useState<Ejercicio[]>([]);
    const videoURL = "/videos/pesomuerto.mp4"; // Ruta al video local

    return (
        <div>
            <nav>
                <header>
                    Kafitness
                </header>
            </nav>
            <h1 className="titulo-ejercicios">Rutinas</h1>
            <div id="app">
                <video width={560} height={315} controls>
                    <source src={videoURL} type="video/mp4" />
                    Tu navegador no soporta la reproducción de video.
                </video>
            </div>
            <footer>
                <ul className="miLista">
                    <li><Link href="/principalreg" className="linkEstilizado">Volver</Link></li>
                </ul>
            </footer>
        </div>
    );
}

export default Page;

