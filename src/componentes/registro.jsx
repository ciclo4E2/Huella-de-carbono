import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";


export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres: '',
      apellido: '',
      ciudad: '',
      email: '',
      contrasena: '',
      // registrados: {nombres: 'aaa',
      // apellido: 'bbb',
      // ciudad: 'ccc',
      // email: 'ddd',
      // contraseña: 'eee'}
      registrados: []
    };
    
    this.handle_nombres = this.handle_nombres.bind(this);
    this.handle_apellido = this.handle_apellido.bind(this);
    this.handle_ciudad = this.handle_ciudad.bind(this);
    this.handle_email = this.handle_email.bind(this);
    this.handle_password = this.handle_password.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    

  }

  

  onSubmit(e) {
    e.preventDefault();
    if (this.state.nombres.length > 0 && this.state.apellido.length > 0 && this.state.email.length > 0 && this.state.contrasena.length > 0) {

      const newRegistros = {
        nombres: this.state.nombres,
        apellido: this.state.apellido,
        ciudad: this.state.ciudad,
        email: this.state.email,
        contrasena: this.state.contrasena
      };

      console.log(newRegistros);
      axios.post('http://localhost:4000/api/calc', newRegistros)
        .then(res => console.log('Registro Exitoso'));


      // axios.get('http://localhost:4000/api/calc')
      //   .then(res => console.log(res.data.contraseña));


      this.setState({
        nombres: '',
        apellido: '',
        ciudad: '',
        email: '',
        contrasena: ''
      })
      console.log(`Form submitted:`);
    }
    else {
      alert('complete todos los campos');
    }
  }


  handle_nombres(e) {
    this.setState({
      nombres: e.target.value,
    });
    // console.log(`valor ingresado: ${this.state.nombres}`);
  }

  handle_apellido(e) {
    this.setState({
      apellido: e.target.value

    });
  }

  handle_ciudad(e) {
    this.setState({
      ciudad: e.target.value

    });
  }

  handle_email(e) {
    this.setState({
      email: e.target.value

    });
  }

  handle_password(e) {
    this.setState({
      contrasena: e.target.value

    });
  }

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  render() {
    return (
      <div className="d-sm-flex justify-content-center">
        <form onSubmit={this.onSubmit}>

          <div className="form-group">

            <input onChange={this.handle_nombres} value={this.state.nombres} type="text" className="form-control" placeholder="nombres" />
          </div>

          <div className="form-group">
            <br />
            <input onChange={this.handle_apellido} value={this.state.apellido} type="text" className="form-control" placeholder="Apellido" />
          </div>

          <div className="form-group">
            <br />
            <input onChange={this.handle_ciudad} value={this.state.ciudad} type="text" className="form-control" placeholder="Ciudad" />
          </div>

          <div className="form-group">
            <br />
            <input onChange={this.handle_email} value={this.state.email} type="email" id="exampleInputEmail1" aria-describedby="emailHelp" className="form-control" placeholder="Email" />
          </div>

          <div className="form-group">
            <br />
            <input onChange={this.handle_password} value={this.state.contrasena} type="password" className="form-control" placeholder="Contraseña" />
          </div>

          <div className="form-group">
            <p></p>
            <input type="submit" className="btn btn-primary" />
<br />

          </div>

        </form>

        
      </div>

    )

  }


}


