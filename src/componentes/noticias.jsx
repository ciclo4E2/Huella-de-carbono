import logo from '../logo.svg';
import '../App.css';

function Noticias() {
    return (
      <div className="Integrantes">
          <div>
          <img src={logo} className="App-logo" alt="logo" />
        <p>Noticia 1</p>
<a href="https://www.un.org/es/climatechange/cop26">Mayor Información</a>
          </div>
        
          <div>
          <img src={logo} className="App-logo" alt="logo" />
        <p>Noticia 2</p>

          </div>

          <div>
          <img src={logo} className="App-logo" alt="logo" />
        <p>Noticia 3</p>

          </div>


          <div>
          <img src={logo} className="App-logo" alt="logo" />
        <p>Noticia 4</p>

          </div>


      </div>
    );
  }

  export default Noticias;

