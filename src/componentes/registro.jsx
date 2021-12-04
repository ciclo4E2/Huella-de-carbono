import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import axios from 'axios';

export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombres: '',
      apellido: '',
      ciudad: '',
      email: '',
      contraseña: ''

    };
    this.state = { registrados: [] };


    this.handle_nombres = this.handle_nombres.bind(this);
    this.handle_apellido = this.handle_apellido.bind(this);
    this.handle_ciudad = this.handle_ciudad.bind(this);
    this.handle_email = this.handle_email.bind(this);
    this.handle_password = this.handle_password.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios.get('http://localhost:4000/api/calc/')
      .then(response => {
        this.setState({ registrados: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  // List() {
  //   this.state.registrados.forEach(element => element.nombres);
    // this.state.registrados.forEach(element => console.log(element.nombres));
    // return this.state.registrados.map(function (currentTodo, i) {
    //   return <li todo={currentTodo} key={i} />;
    // })
  // }



  onSubmit(e) {
    e.preventDefault();
    if (this.state.nombres.length > 0 && this.state.apellido.length > 0 && this.state.email.length > 0 && this.state.contraseña.length > 0) {

      const newRegistros = {
        nombres: this.state.nombres,
        apellido: this.state.apellido,
        ciudad: this.state.ciudad,
        email: this.state.email,
        contraseña: this.state.contraseña
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
        contraseña: ''
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
      contraseña: e.target.value

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
        <form>

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
            <input onChange={this.handle_password} value={this.state.contraseña} type="password" className="form-control" placeholder="Contraseña" />
          </div>

          <div className="form-group">
            <p></p>
            <input type="submit" onClick={this.onSubmit} value="Guardar" className="btn btn-primary" />


          </div>

        </form>

        <br /><br />
        <table className="table table-striped" style={{ marginTop: 20 }} >
          <thead>
            <tr>
              <th>ID</th>
              <th>nombre</th>
              <th>apellido</th>
              <th>ciudad</th>
              <th>email</th>
              <th>contraseña</th>
            </tr>
          </thead>
          {/* <tbody> */}
          <ul>
          {/* {this.state.registrados.map(task => {return <li key={this.state.registrados._id}>{task}</li>})} */}
          </ul>
         
            
          {/* </tbody> */}
        </table>



      </div>

    )

  }


}


