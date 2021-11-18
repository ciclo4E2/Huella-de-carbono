import logo from '../logo.svg';
import '../App.css';

function Noticias() {
    return (
      <div className="componente">
          <div>
          <img src={logo} className="App-logo" alt="logo" />
        <p>Noticia 1</p>
<a href="https://www.un.org/es/climatechange/cop26">Glasgow 2021</a>
<p>Cambio Climático</p>
          </div>
        
          <div>
          <img src={logo} className="App-logo" alt="logo" />
        <p>Noticia 2</p>
        <a href="https://news.un.org/es/story/2020/12/1485312">CO2 Emisiones</a>
<p>Record</p>
          </div>

          <div>
          <img src={logo} className="App-logo" alt="logo" />
        <p>Noticia 3</p>
        <a href="https://medlineplus.gov/spanish/pruebas-de-laboratorio/dioxido-de-carbono-co2-en-la-sangre/">Efectos Salud</a>
<p>Consecuencias</p>
          </div>


          <div>
          <img src={logo} className="App-logo" alt="logo" />
        <p>Noticia 4</p>
        <a href="https://www.wwf.org.co/?365023/Guia-para-entender-los-aportes-de-Colombia-a-la-lucha-contra-el-cambio-climatico">Compromiso Colombia</a>
<p>Aportes y Medidas</p>
          </div>


      </div>
    );
  }

  export default Noticias;

