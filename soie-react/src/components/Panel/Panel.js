
import React, { Component } from "react";
import {Chart} from "react-google-charts";
import './Panel.css'
class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: props.titulo,
            dato: [],
            tipo: props.tipo
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    numeroEntradas = (data) => {
        this.setState({dato: data.length})
    }

    ultimos = (data) => {
        this.setState({dato: [data.pop(), data.pop(), data.pop()]})
    }

    relacionHyM = (data) => {
        let h = data.filter(user => user.gender === "Hombre").length;
        let m = data.filter(user => user.gender === "Mujer").length;
        this.setState({dato: [["Genero","Cantidad"],["Hombres", h],["Mujeres", m]]})
    }

    relacionPyS = (data) => {
        let p = data.filter(product => product.type === "Producto").length;
        let s = data.filter(product => product.type === "Servicio").length;
        this.setState({dato: [["Tipo","Cantidad"],["Productos", p],["Servicios", s]]})
    }

    componentDidMount(){
        let key = this.state.tipo;
        switch (key) {
            case "numeroUsuarios":
                this.apiCall("/api/users/", this.numeroEntradas);
                break;

            case "ultimoUsuario":
                this.apiCall("/api/users/", this.ultimos);
                break;

            case "relacionHyM":
                this.apiCall("/api/users/", this.relacionHyM);
                break;

            case "numeroProductos":
                this.apiCall("/api/products/", this.numeroEntradas);
                break;

            case "ultimoProducto":
                this.apiCall("/api/products/", this.ultimos)
                break;

            case "relacionPyS":
                this.apiCall("/api/products/", this.relacionPyS)
                break;

            default:
                break;
        }
    }

    //componentDidUpdate()

    //componentWillUnmount()




    render(){

        let key = this.state.tipo;
    
        switch (key) {
            case "numeroUsuarios":
                return(
                    <div className="panel">
                        <h3>{this.state.titulo}</h3>
                        <h4>{this.state.dato} usuarios</h4>
                    </div>
                )

            case "ultimoUsuario":
                return(
                    <div className="panel">
                        <h3>{this.state.titulo}</h3>
                        <ul>
                            {this.state.dato.map(item => <li key={item}> {item.email} </li>)}
                        </ul>
                    </div>
                )

            case "relacionHyM":
                return(
                    <div className="panel">
                        <h3>{this.state.titulo}</h3>
                        <Chart
                            chartType="PieChart"
                            data={this.state.dato}
                        />
                    </div>
                )

            case "numeroProductos":
                return(
                    <div className="panel">
                        <h3>{this.state.titulo}</h3>
                        <h4>{this.state.dato} productos</h4>
                    </div>
                )

            case "relacionPyS":
                return(
                    <div className="panel">
                        <h3>{this.state.titulo}</h3>   
                        <Chart
                            chartType="PieChart"
                            data={this.state.dato}
                        />
                    </div>
                )

            case "ultimoProducto":
                return(
                    <div className="panel">
                        <h3>{this.state.titulo}</h3>
                        <ul>
                            {this.state.dato.map(item => <li key={item}> {item.name} </li>)}
                        </ul>
                    </div>
                )

            default:
                break;
        }


    }

}

export default Panel;