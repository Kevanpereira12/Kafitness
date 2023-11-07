import React, { useState, useEffect } from 'react';
import { app } from '../firebaseconfig';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import './registro.css'; 

const RegistroPage = () => {
  const [nombre, setNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState(''); // Nuevo campo para la contraseña
  const [datosGuardados, setDatosGuardados] = useState([]);
  const db = getFirestore(app);

  const guardarDatos = async () => {
    try {
      await addDoc(collection(db, 'registros'), {
        nombre: nombre,
        primerApellido: primerApellido,
        segundoApellido: segundoApellido,
        correo: correo,
        telefono: telefono,
        nombreUsuario: nombreUsuario,
        contrasena: contrasena, // Agrega la contraseña al documento
      });
      console.log('Datos guardados exitosamente');
    } catch (error) {
      console.error('Error al guardar datos: ', error);
    }
  };

  const obtenerDatos = async () => {
    const datos = [];
    const querySnapshot = await getDocs(collection(db, 'registros'));
    querySnapshot.forEach((doc) => {
      datos.push(doc.data());
    });
    setDatosGuardados(datos);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div className="registro">
      <div className="registro-form">
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label>Primer Apellido</label>
        <input
          type="text"
          placeholder="Primer Apellido"
          value={primerApellido}
          onChange={(e) => setPrimerApellido(e.target.value)}
        />
        <label>Segundo Apellido</label>
        <input
          type="text"
          placeholder="Segundo Apellido"
          value={segundoApellido}
          onChange={(e) => setSegundoApellido(e.target.value)}
        />
        <label>Correo Electrónico</label>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        <label>Teléfono</label>
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <label>Nombre de Usuario</label>
        <input
          type="text"
          placeholder="Nombre de Usuario"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
        />
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <button onClick={guardarDatos}>Guardar Datos</button>
      </div>
    </div>
  );
};

export default RegistroPage;
