import logo from '../logo.svg';
import '../App.css';

function Noticias() {
  return (
    <div className="componente">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p><a href="https://www.un.org/es/climatechange/cop26" target="_blank" rel="noreferrer">Glasgow 2021</a></p>


        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita atque inventore incidunt amet vero explicabo alias delectus voluptatum aperiam!</p>
      </div>

      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p><a href="https://news.un.org/es/story/2020/12/1485312" target="_blank" rel="noreferrer"> CO2 Emisiones</a></p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint in dolores saepe ducimus facere omnis, dolore corrupti reprehenderit ut!</p>

      </div>

      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p><a href="https://medlineplus.gov/spanish/pruebas-de-laboratorio/dioxido-de-carbono-co2-en-la-sangre/">Efectos Salud</a></p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa rem ad quos ducimus recusandae fugit cumque, facilis eaque dolor voluptates.</p>
      </div>


      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p><a href="https://www.wwf.org.co/?365023/Guia-para-entender-los-aportes-de-Colombia-a-la-lucha-contra-el-cambio-climatico">Compromiso Colombia</a></p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat odit dolorum nulla fugiat aspernatur quia magnam commodi consectetur possimus reprehenderit?</p>
      </div>


    </div>
  );
}

export default Noticias;

