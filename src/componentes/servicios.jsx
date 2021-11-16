import logo from '../logo.svg';
import '../App.css';

function Servicios() {
    return (
      <div className="componente">
          <div>
          <img src={logo} className="App-logo" alt="logo" />
        <p>servico 1</p>

          </div>
        
          <div>
          <img src={logo} className="App-logo" alt="logo" />
        <p>servicio 2</p>

          </div>

          <div>
          <img src={logo} className="App-logo" alt="logo" />
        <p>servico 3</p>

          </div>


          
      </div>
    );
  }



export default Servicios;