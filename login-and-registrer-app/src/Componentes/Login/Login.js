import React, {useState} from "react"
import "./Login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({setLoginUser}) => {

    const history =useHistory()

    const [ user, setUser] = useState({
        email: "",
        password: "",
        
    })

    const handleChange = e => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
        
    }

    const Login = () => {
        axios.post("http://localhost:9002/Login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div className="Login">
            
            <h1>Iniciar Sesión</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Ingresa tu email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Ingresa tu contraseña"></input>
            <div className="button" onClick={Login}>Ingresar</div>
            <div>o</div>
            <div className="button" onClick={() => history.push("/Registrer")}>Registrarme</div>
        </div>
    )
}

export default Login;