"use client"
import React, { useState, useEffect } from 'react';
import { app } from '../firebaseconfig';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';

const PerfilPage = () => {
  const [estatura, setEstatura] = useState('');
  const [imc, setIMC] = useState('');
  const [cuello, setCuello] = useState('');
  const [pecho, setPecho] = useState('');
  const [brazoIzquierdo, setBrazoIzquierdo] = useState('');
  const [brazoDerecho, setBrazoDerecho] = useState('');
  const [abdomen, setAbdomen] = useState('');
  const [gluteos, setGluteos] = useState('');
  const [piernaIzquierda, setPiernaIzquierda] = useState('');
  const [piernaDerecha, setPiernaDerecha] = useState('');
  const [datosGuardados, setDatosGuardados] = useState([]);
  const db = getFirestore(app);

  const guardarDatos = async () => {
    try {
      await addDoc(collection(db, 'perfiles'), {
        estatura: estatura,
        imc: imc,
        cuello: cuello,
        pecho: pecho,
        brazoIzquierdo: brazoIzquierdo,
        brazoDerecho: brazoDerecho,
        abdomen: abdomen,
        gluteos: gluteos,
        piernaIzquierda: piernaIzquierda,
        piernaDerecha: piernaDerecha,
      });
      console.log('Datos guardados exitosamente');
    } catch (error) {
      console.error('Error al guardar datos: ', error);
    }
  };

  const obtenerDatos = async () => {
    const datos = [];
    const querySnapshot = await getDocs(collection(db, 'perfiles'));
    querySnapshot.forEach((doc) => {
      datos.push(doc.data());
    });
    setDatosGuardados(datos);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div>
      <h1>Perfil</h1>
      <div>
      <h3>Estatura</h3>
        <input
          type="text"
          placeholder="Estatura"
          value={estatura}
          onChange={(e) => setEstatura(e.target.value)}
        />
      <h3>IMC</h3>
        <input
          type="text"
          placeholder="IMC"
          value={imc}
          onChange={(e) => setIMC(e.target.value)}
        />
        <h3>Medida Cuello</h3>
        <input
          type="text"
          placeholder="Medida Cuello"
          value={cuello}
          onChange={(e) => setCuello(e.target.value)}
        />
        <h3>Medida Pecho</h3>
        <input
          type="text"
          placeholder="Medida Pecho"
          value={pecho}
          onChange={(e) => setPecho(e.target.value)}
        />
        <h3>Medida brazo izquierdo</h3>
        <input
          type="text"
          placeholder="Medida Brazo izquierdo"
          value={brazoIzquierdo}
          onChange={(e) => setBrazoIzquierdo(e.target.value)}
        />
        <h3>Medida brazo derecho</h3>
        <input
          type="text"
          placeholder="Medida Brazo Derecho"
          value={brazoDerecho}
          onChange={(e) => setBrazoDerecho(e.target.value)}
        />
        <h3>Medida abdomen</h3>
        <input
          type="text"
          placeholder="Medida Abdomen"
          value={abdomen}
          onChange={(e) => setAbdomen(e.target.value)}
        />
        <h3>Medida Gluteos</h3>
        <input
          type="text"
          placeholder="Medida Glueteos"
          value={gluteos}
          onChange={(e) => setGluteos(e.target.value)}
        />
        <h3>Medida pierna izquierda</h3>
        <input
          type="text"
          placeholder="Medida pierna izquierda"
          value={piernaIzquierda}
          onChange={(e) => setPiernaIzquierda(e.target.value)}
        />
        <h3>Medida pierna izquierda</h3>
        <input
          type="text"
          placeholder="Medida pierna derecha"
          value={piernaDerecha}
          onChange={(e) => setPiernaDerecha(e.target.value)}
        />
        {/* Repite el proceso para los demás campos */}
        <button onClick={guardarDatos}>Guardar Datos</button>
      </div>
      <h2>Datos Guardados en Firestore:</h2>
      <ul>
        {datosGuardados.map((dato, index) => (
          <li key={index}>
            {`Estatura: ${dato.estatura}, IMC: ${dato.imc}, Cuello: ${dato.cuello}, Pecho: ${dato.pecho} ...`}
            {/* Repite esto para los demás campos */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerfilPage;
