import './App.css';
import Homepage from "./Componentes/Homepage/Homepage"
import Login from "./Componentes/Login/Login"
import Registrer from "./Componentes/Registrer/Registrer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/Login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/Registrer">
            <Registrer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
