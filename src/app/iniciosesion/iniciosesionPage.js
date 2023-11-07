import React, { useState } from 'react';
import { app } from '../firebaseconfig';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate en lugar de useHistory

const InicioSesionPage = () => {
  const [correoOUsuario, setCorreoOUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const db = getFirestore(app);
  const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory

  const iniciarSesion = async () => {
    try {
      // Consulta la base de datos para encontrar al usuario por correo o nombre de usuario
      const usuariosRef = collection(db, 'registros');
      const q = query(
        usuariosRef,
        where('correo', '==', correoOUsuario).orWhere('nombreUsuario', '==', correoOUsuario)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size === 0) {
        setError('Usuario no encontrado');
        return;
      }

      // Verifica la contraseña
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.contrasena === contrasena) {
          // Inicio de sesión exitoso, redirige al usuario a la página principal
          navigate('/horario'); // Utiliza navigate para redirigir
        } else {
          setError('Contraseña incorrecta');
        }
      });
    } catch (error) {
      console.error('Error al iniciar sesión: ', error);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <div>
        <input
          type="text"
          placeholder="Correo o Nombre de Usuario"
          value={correoOUsuario}
          onChange={(e) => setCorreoOUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
        />
        <button onClick={iniciarSesion}>Iniciar Sesión</button>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default InicioSesionPage;
