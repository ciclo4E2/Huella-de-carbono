import Glasgow from '../imagenes/Glasgow.jpg'
import CO2 from '../imagenes/CO2.jpg'
import Colombia from '../imagenes/Colombia.jpg'
import '../App.css';

function Noticias() {
  return (
    <div className="componente">
      <div>
        <img src={Glasgow} className="App-logo" alt="logo" />
        <p><a href="https://www.un.org/es/climatechange/cop26" target="_blank" rel="noreferrer">Glasgow 2021</a></p>


        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita atque inventore incidunt amet vero explicabo alias delectus voluptatum aperiam!</p>
      </div>

      <div>
        <img src={CO2} className="App-logo" alt="logo" />
        <p><a href="https://news.un.org/es/story/2020/12/1485312" target="_blank" rel="noreferrer"> CO2 Emisiones</a></p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sint in dolores saepe ducimus facere omnis, dolore corrupti reprehenderit ut!</p>

      </div>

      <div>
        <img src={Colombia} className="App-logo" alt="logo" />
        <p><a href="https://medlineplus.gov/spanish/pruebas-de-laboratorio/dioxido-de-carbono-co2-en-la-sangre/">Efectos Salud</a></p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa rem ad quos ducimus recusandae fugit cumque, facilis eaque dolor voluptates.</p>
      </div>
    </div>
  );
}

export default Noticias;

