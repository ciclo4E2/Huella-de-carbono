import logo from './logo.svg';
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  
} from "react-router-dom";
import Integrantes from '../src/componentes/integrantes';
import Servicios from '../src/componentes/servicios';
import Noticias from '../src/componentes/noticias';


function App() {
  return (
    <div className="Apps">
      <header className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />
        <h2>Huella de carbono</h2>
      </header>
    
    <Router>
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
                      
        </ul>
      </nav>
      </div>
      <Routes>
        
        <Route exact path="/" element={<Servicios/>} />
        <Route exact path="/noticias" element={<Noticias/>} />
        <Route exact path="/integrantes" element={<Integrantes/>} />
        
      </Routes>
    
  </Router>
    
    
    </div>
  );
}

export default App;
