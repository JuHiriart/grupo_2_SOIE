import React, { Component } from "react";
import "./Lista.css"

class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dato: []
        }
    }

    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }

    
    lista = data => {
        this.setState({dato: data})
        console.log(this.state.dato)
    }

    componentDidMount(){
        this.apiCall("/api/products/", this.lista);
    }

    render(){
        return(
            <div className = "lista">
                <table id="userTable">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Descuento</th>
                        <th>tipo</th>
                        <th>Tiempo</th>
                    </tr>

                    {this.state.dato.map(item => <tr key={item}> 
                        <td><p>{item.id}</p></td>
                        <td><p>{item.name}</p></td>
                        <td><p>${item.price}</p></td>
                        <td><p>{item.off}%</p></td>
                        <td><p>{item.type}</p></td>
                        <td><p>{item.time}</p></td>
                        </tr>)}
                </table>
            </div>
        )
    }
}

export default Lista;