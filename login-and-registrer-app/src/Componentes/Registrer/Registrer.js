import React, {useState} from "react"
import "./Registrer.css"
import axios from "axios"
import { useHistory} from "react-router-dom"

const Registrer = () => {
    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email: "",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const Registrer = () => {
        const { name, email, password, reEnterPassword } = user
        if ( name && email && password && (password === reEnterPassword)){
            
            axios.post("http://localhost:9002/Registrer",  user)
            .then( res => {
                alert(res.data.message)
                history.push("/Login")
            })
        } else {
            alert ("Registro inválido")
        }
        
    }
    return (
        <div className="Registrer">
            {console.log("User", user)}
            <h1>Regístrate</h1>
            <input type="text" name="name" value={user.name} placeholder="Ingresa tu nombre" onChange={handleChange}></input>
            <input type="text" name="email" value={user.mail}  placeholder="Ingresa tu email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password}  placeholder="Ingresa tu contraseña" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Repite tu contraseña" onChange={handleChange}></input>
            <div className="button" onClick={Registrer} >Registrarme</div>
            <div>o</div>
            <div className="button"onClick={() => history.push("/Login")}>Ingresar</div>
        </div>
    )
}

export default Registrer;