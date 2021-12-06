import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Tablainscritos = props => (
    
    <tr>
        <th scope="row">{props.arreglo._id}</th>
        <td>{props.arreglo.nombres}</td>
        <td>{props.arreglo.apellido}</td>
        <td>{props.arreglo.ciudad}</td>
        <td>{props.arreglo.email}</td>
        <td>{props.arreglo.contrasena}</td>
        <td>
    {/* <Link to={"/editar" + props.arreglo._id}>Edit</Link> */}
    <Link to={"/editar"} >Edit</Link>
  </td> 
    </tr>


)
export default class Listaregistrados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registrados: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/calc/')
            .then(response => {
                this.setState({ registrados: response.data });
                // console.log(this.state.registrados)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    List() {
        // var rObj = [{nombre:'carlota', apellido:'oregon', ciudad:'pasto', email:'lafea@web', contrasena:123456, _id:1000}];
    
        return this.state.registrados.map((current,i) => {
            console.log(current._id);
            return <Tablainscritos arreglo={current} key={i} />;
            // return <p>subio</p>
        })
    }

    render() {
        return (
            <div>
                <h3>Lista de ingresados</h3>
                <table className="table table-striped"  >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Ciudad</th>
                            <th>Email</th>
                            <th>Contraseña</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.List()}
                    </tbody>
                </table>
            </div>
        )
    }
}
