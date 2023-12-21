import React, {Component} from 'react';
import Formularios02 from './components/FormulariosParte02';
import Formularios01 from './components/FormulariosParte01';
import PraticandoFormulario from './components/Praticando';

class App extends Component{
  render(){
    return(
      <div>        
        <Formularios01 />
        <Formularios02 />
        <PraticandoFormulario />
      </div>
    )
  }
}

export default App;
