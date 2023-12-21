import React, {Component} from 'react';
// Colocar as pastas com os nomes delas e o arquivo principal como index.js que o app chama automaticamente o index
import HoraAtual from './components/HoraAtual';
import Eventos from './components/Eventos';
import RenderizacaoCondicional from './components/RenderizacaoCondicional';
import Listas from './components/Listas';

class App extends Component{
  render(){
    return(
      <div>
        <HoraAtual />
        <Eventos nome="Visitante" />
        <RenderizacaoCondicional />
        <Listas />
      </div>
    )
  }
}

export default App;