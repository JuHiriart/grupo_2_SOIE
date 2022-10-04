import React from "react";
import ContenedorPrueba from "./components/ContenedorPrueba.js";
import Panel from "./components/Panel/Panel.js"

function App()  {
  return(
    <div className="App">
      <header className="App-header">


      </header>

      <main>
        <Panel titulo={"Número de usuarios"}              tipo={"numeroUsuarios"} />
        <Panel titulo={"Últimos usuarios"}                tipo={"ultimoUsuario"} />
        <Panel titulo={"Relación hombres y mujeres"}      tipo={"relacionHyM"} />
        <Panel titulo={"Número de productos"}             tipo={"numeroProductos"} />
        <Panel titulo={"Últimos productos"}               tipo={"ultimoProducto"} />
        <Panel titulo={"Relación productos y servicios"}  tipo={"relacionPyS"} />
        
      </main>

    </div>
  )
}

export default App;