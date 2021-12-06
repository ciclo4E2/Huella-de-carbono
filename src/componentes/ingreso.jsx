


import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import axios from 'axios';

export default class Ingreso extends Component {
    constructor(props) {
        super(props);
        this.state = {

            usuario: "",
            password: "",
            error: false,
            errorMsg: "",
            user_encontrado: false,
            pass_encontrado: false,
            registrados: []
        };

        this.handle_usuario = this.handle_usuario.bind(this);
        
    }

    onSubmit = async e => {
        await
        e.preventDefault();
        
        // axios.post('http://localhost:4000/api/calc/', autenticacion)
        // .then(res => console.log(res.data));

        //     const newRegistros = {
        //       nombres: this.state.nombres,
        //       apellido: this.state.apellido,
        //       ciudad: this.state.ciudad,
        //       email: this.state.email,
        //       contraseña: this.state.contraseña
        //       };

        //     console.log(newRegistros);
        //     axios.post('http://localhost:4000/api/calc', newRegistros)
        //    .then(res => console.log(res.data));

        // this.setState({
        // nombres: '',
        // apellido: '',
        // ciudad: '',
        // email: '',
        // contraseña: ''
        //   })

        axios.get('http://localhost:4000/api/calc/')
            .then(response => {
                this.setState({ registrados: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
        
        this.state.registrados.forEach(element => 
            this.state.usuario===element.email? this.setState({ user_encontrado: true }): console.log(element.email));
            
        
        this.state.registrados.forEach(element2 => 
            this.state.password===element2.contraseña? this.setState({ pass_encontrado: true }): console.log(element2.contraseña));
        if (this.state.pass_encontrado && this.state.user_encontrado) {
            console.log('usuario ingresado')
            localStorage.setItem('user', 'Juan');
        }
    }

////////////////////////////////////////////////////////
    handle_usuario = async e => {
        await this.setState({
            usuario: e.target.value,
        });
        console.log(`valor ingresado: ${this.state.usuario}`);
    }

    handle_password = async e => {
        await this.setState({
            password: e.target.value

        });
        console.log(`valor ingresado: ${this.state.password}`);
    }


    render() {
        return (
            <div className="d-sm-flex justify-content-center">
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" onChange={this.handle_usuario} usuario="usuario" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" onChange={this.handle_password} password="password" className="form-control" placeholder="Password" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>

        )

    }





}


// buscarusuario(){
//     console.log('holas');
//     this.axios.get('/').then(res =>{

//       this.users = res.data;
//       this.users.forEach((value, index)=>{
//         console.log(value.nombres + " " + value.contraseña);

//         if(this.form.username === value.nombres){
//           console.log('usuario encontrado');

//           if(this.form.password === value.contraseña){
//             console.log('contrasena correcta');
//             window.localStorage.setItem('autentication', 'ok');
//             // window.localStorage.setItem('password', this.form.password);
//             window.localStorage.setItem('usuario', value.nombres);
//             window.localStorage.setItem('ciudad', value.ciudad);

//             this.$router.push({path: '/menu'});
//           }
//           else{
//             if (window.localStorage.getItem('autentication') === 'ok') {

//             }
//             else{
//               window.localStorage.setItem('autentication', 'negada');
//             }

//           }
//         }
//         else{
//           if (window.localStorage.getItem('autentication') === 'ok') {

//             }
//             else{
//               window.localStorage.setItem('autentication', 'fallida');
//             }
//           // window.localStorage.removeItem('autentication');
//         }
//       })

//     })
