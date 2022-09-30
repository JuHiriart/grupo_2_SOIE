import React from "react";
import ContenedorPrueba from "./components/ContenedorPrueba.js";
import Panel from "./components/Panel/Panel.js"

function App()  {
  return(
    <div className="App">
      <header className="App-header">


      </header>

      <main>
        <Panel titulo={"Número de usuarios"} dato={56} tipo={"numeroUsuarios"} />
        <ContenedorPrueba inicial={0}/>
      </main>

    </div>
  )
}

export default App;