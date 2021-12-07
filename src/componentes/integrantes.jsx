
import logo1 from '../imagenes/images.jpg';
import '../App.css';

function Integrantes() {
    return (
        <div className="componente">
          <div>
          <img src={logo1} className="App-logo" alt="logo" />
        <p>Melanie</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas?</p>

          </div>
        
          <div>
          <img src={logo1} className="App-logo" alt="logo" />
        <p>Yesid</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas?</p>

          </div>

          <div>
          <img src={logo1} className="App-logo" alt="logo" />
        <p>Yuder</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quas?</p>

          </div>

      </div>
    );
  }



export default Integrantes;