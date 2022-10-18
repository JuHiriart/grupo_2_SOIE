import React, { Component } from "react";

class ContenedorPrueba extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numero: props.inicial
        }
    }

    incrementar() {
        this.setState( { numero: this.state.numero + 1 } )
    }

    decrementar() {
        this.setState( { numero: this.state.numero - 1 } )
    }



    render(){
        return(
            <div>
                <p>Soy el número {this.state.numero}</p>
                <button onClick= {() => this.incrementar()} >mas 1</button>
                <button onClick= {() => this.decrementar()} >menos 1</button>
            </div>
        )
    }
}

export default ContenedorPrueba;