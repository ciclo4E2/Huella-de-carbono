import Glasgow from '../imagenes/Glasgow.jpg'
import CO2 from '../imagenes/CO2.jpg'
import Colombia from '../imagenes/Colombia.jpg'
import '../App.css';

function Noticias() {
    return (
      <div className="componente">
        <section >
          <div>
              <img src={Glasgow} className="App-logo" alt="logo" />
              <h3><a href="https://www.un.org/es/climatechange/cop26">Glasgow 2021</a></h3>
              <p align="center"> La última ronda de conversaciones sobre el clima se celebra del 31 de octubre al 12 de noviembre de 2021 en Glasgow (Reino Unido). </p>
          </div>
        
          <div>
              <img src={CO2} className="App-logo" alt="logo" />
              <h3><a href="https://news.un.org/es/story/2020/12/1485312">CO2 Emisiones</a></h3>
              <p align="center"> Las emisiones de CO2 rompen otro récord: un calentamiento global catastrófico amenaza el planeta </p>
          </div>


          <div>
              <img src={Colombia} className="App-logo" alt="logo" />
              <h3><a href="https://www.wwf.org.co/?365023/Guia-para-entender-los-aportes-de-Colombia-a-la-lucha-contra-el-cambio-climatico">Aportes Colombia</a></h3>
              <p align="center"> Guía para entender los aportes de Colombia a la lucha contra el cambio climático </p>
          </div>
        </section>

      </div>
    );
  }

  export default Noticias;

