import logo from './imagenes/logo.png';
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  

} from "react-router-dom";


import Integrantes from '../src/componentes/integrantes';
import Servicios from '../src/componentes/servicios';
import Calculadora from '../src/componentes/calculadora';
import Noticias from '../src/componentes/noticias';
import Registro from '../src/componentes/registro';
import Ingreso from '../src/componentes/ingreso'

function App() {
  // const navigate = useNavigate();

  return (
    <Router className='navegacion'>
    <div className="App">
      <header className='App-header'>
        <img src={logo} className="logo" alt="logo" />
        <h2>Huella de carbono</h2>
        <div>

          <Link to='/ingreso' type="button" class="btn btn-info btn-sm" id='ingreso'>Ingreso</Link>
          <Link to='/registro' type="button" class="btn btn-info btn-sm" id='registro'>Registro</Link>
                    
        </div>
      </header>

      
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Servicios</Link>
              </li>
              <li>
                <Link to="/noticias">Noticias</Link>
              </li>
              <li>
                <Link to="/integrantes">Integrantes</Link>
              </li>

              <li>
                <Link to="/calculadora">Calculadora</Link>
              </li>

            </ul>
          </nav>
        </div>
        <Routes>

          <Route exact path="/" element={<Servicios />} />
          <Route  path="/noticias" element={<Noticias />} />
          <Route  path="/integrantes" element={<Integrantes />} />
          <Route  path="/registro" element={<Registro/>} />
          <Route  path="/ingreso" element={<Ingreso/>} />
          <Route  path="/calculadora" element={<Calculadora/>} />

        </Routes>

      


    </div>
    </Router>
  );
}

export default App;
