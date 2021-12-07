

import melanieFoto from '../imagenes/melanie.png';
import yesidFoto from '../imagenes/yesid.png';
import yuderFoto from '../imagenes/yuder.png';
import '../App.css';

function Integrantes() {
    return (
        <div className="componente">
          <div>
          <img src={melanieFoto} className="App-logo" alt="logo" />
        <p>Melanie</p>
        <p>Ingeniera ambiental, por un gran gusto por la tecnologia</p>

          </div>
        
          <div>
          <img src={yesidFoto} className="App-logo" alt="logo" />
        <p>Yesid</p>
        <p>Administrador de empresas, siempre dispuesto a colaborar con la mejor actitud</p>

          </div>

          <div>
          <img src={yuderFoto} className="App-logo" alt="logo" />
        <p>Yuder</p>
        <p>Estudiante de ing mecatronica, entregado a su labor. Me dedico a ser mto industrial</p>

          </div>

      </div>
    );
  }



export default Integrantes;