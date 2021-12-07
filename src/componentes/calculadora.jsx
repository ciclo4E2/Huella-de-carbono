
import React, { Component } from 'react';


export default class Registro extends Component {
    constructor(props) {
      super(props);
      this.state = {
        huella_carbono: '',
        tipo_transporte: '' 
      };
  
      
      this.handle_tipo_transporte = this.handle_tipo_transporte.bind(this);
    //   this.handle_apellido = this.handle_apellido.bind(this);
    //   this.handle_ciudad = this.handle_ciudad.bind(this);
    //   this.handle_email = this.handle_email.bind(this);
    //   this.handle_password = this.handle_password.bind(this);
    //   this.onSubmit = this.onSubmit.bind(this);
  
    }
  
    onSubmit(e) {
        e.preventDefault();
  
        
      console.log(`Form submitted:`);
    }
  
    handle_tipo_transporte(e){

      this.setState({
        tipo_transporte: e.target.value
        
      });
      console.log(`variable ${this.state.tipo_transporte}`);
    }
  
    handle_apellido(e){
      this.setState({
        apellido: e.target.value
  
      });
    }
  
    handle_ciudad(e){
      this.setState({
        ciudad: e.target.value
  
      });
    }
  
    handle_email(e){
      this.setState({
        email: e.target.value
  
      });
    }
  
    handle_password(e){
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
  
    render(){
      return (
        <div className ="d-sm-flex justify-content-center">
            <form className="form-group">
            <label className="my-1 mr-2" >Seleccione el tipo de transporte que usa</label>
            <select className="custom-select my-1 mr-sm-2" onChange={this.handle_tipo_transporte} value={this.state.tipo_transporte} >
                <option defaultValue>seleccione una opcion</option>
                <option value="Camion">Camion</option>
                <option value="bus">bus servico publico</option>
                <option value="vehiculo">vehiculo alquilado o taxi</option>
                <option value="motocicleta">motocicleta</option>
                <option value="Bicicleta">Bicicleta - caminando</option>
            </select>
            <br />
            <label className="my-1 mr-2" >Seleccione el rango de horas diarias de uso</label>
            <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref2">
                <option defaultValue>seleccione una opcion</option>
                <option value="menos de 1/2 hora">menos de 1/2 hora</option>
                <option value="entre 1/2 - 1 hora">entre 1/2 - 1 hora</option>
                <option value="1 - 2 horas">1 - 2 horas</option>
                <option value="mas de 3 horas">mas de 3 horas</option>
                
            </select>

            <div className="custom-control custom-checkbox my-1 mr-sm-2">
                <input type="checkbox" className="custom-control-input" id="customControlInline" />
                <label className="custom-control-label" >Remember my preference</label>
            </div>

            <button type="submit" className="btn btn-primary my-1">Submit</button>
        </form>

        </div>
        
    )

    }

}



