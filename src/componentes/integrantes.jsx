import logo from '../logo.svg';
import '../App.css';

function Integrantes() {
    return (
        <div className="componente">
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h4>Melanie Garcia </h4>
          </div>
        
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h4>Daniel Rivera</h4>
          </div>

          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <h4>Yuder Hernandez</h4>
          </div>

          <div>
              <img src={logo} className="App-logo" alt="logo" />
              <h4>Yesid Moreno</h4>
          </div>
      </div>
    );
  }



export default Integrantes;