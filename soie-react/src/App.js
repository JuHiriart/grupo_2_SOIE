import React from "react";
import ContenedorPrueba from "./components/ContenedorPrueba.js";
import Panel from "./components/Panel/Panel.js"
import Lista from "./components/Lista/Lista.js"
import "./App.css"

function App()  {
  return(
    <div className="App">
      <header className="App-header">

        <img src="images/logo/logo-SOIE.png"></img>
        <h1>Dasboard</h1>
      </header>

      <main>
        <section className="main">
        <Panel titulo={"Número de usuarios"}              tipo={"numeroUsuarios"} />
        <Panel titulo={"Últimos usuarios"}                tipo={"ultimoUsuario"} />
        <Panel titulo={"Relación hombres y mujeres"}      tipo={"relacionHyM"} />
        <Panel titulo={"Número de productos"}             tipo={"numeroProductos"} />
        <Panel titulo={"Últimos productos"}               tipo={"ultimoProducto"} />
        <Panel titulo={"Relación productos y servicios"}  tipo={"relacionPyS"} />
        </section>

        <section>
          <Lista/>
        </section>
        
        
      </main>

    </div>
  )
}

export default App;