// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import InicioSesionPage from './InicioSesionPage'; // Importa tu componente de inicio de sesión
// Otras importaciones y componentes de rutas

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <InicioSesionPage />
          </Route>
          {/* Otras rutas aquí */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
