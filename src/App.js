import React from 'react';

import './App.css';
//importat componentes
import './componets/TableInformacion.js';
import TableInformacion from './componets/TableInformacion';
import Datos from './componets/Datos';

function App() {
  return (
    <div className="app container">
      <header className="jumbotron">

        <p className="lead text-center" >Tabla Información</p>
        <section className="componentes">
          <Datos
            mensaje="Agregando Información"
          />
          <TableInformacion className="table-hover" />


        </section>

      </header>

    </div>
  );
}

export default App;
