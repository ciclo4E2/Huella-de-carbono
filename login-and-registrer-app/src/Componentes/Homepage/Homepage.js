import React from "react"
import "./Homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className= "Homepage">
            <h1>Inicio</h1>
            <div className= "button" onClick={() => setLoginUser({})}>Salir</div>
        </div>
    )
}

export default Homepage;