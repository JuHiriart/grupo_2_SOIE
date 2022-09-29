import React, { Component } from "react";

class Panel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            titulo: props.titulo,
            dato: props.dato,
            tipo: props.tipo
        }
    }




    render(){

        let key = this.state.tipo;
    
        switch (key) {
            case "numeroUsuarios":
                return(
                    <div>
                        <h3>{this.state.titulo}</h3>
                        <h4>{this.state.dato}</h4>
                    </div>
                )

            case "ultimoUsuario":
                return(
                    <div>

                    </div>
                )

            case "relacionHyM":
                return(
                    <div>
                        
                    </div>
                )

            case "numeroProductos":
                return(
                    <div>
                        
                    </div>
                )

            case "relacionPyS":
                return(
                    <div>
                        
                    </div>
                )

            case "ultimoProducto":
                return(
                    <div>
                        
                    </div>
                )

            case "listaProductos":
                return(
                    <div>
                        
                    </div>
                )
            
            default:
                break;
        }


    }

}

export default Panel;