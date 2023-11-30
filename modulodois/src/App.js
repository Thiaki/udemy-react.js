import React, {Component} from 'react';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
      // Variaveira mutáveis
    }  
  }

  // Faz com que rode depois que carregar a variavel na página
  componentDidMount(){
    setInterval( () => {
      this.setState({ hora: new Date().toLocaleTimeString() })
    }, 1000);
  }

  // Quando atualizar o state (variavel) do componente, ele executa
  componentDidUpdate(){

  }

  // Retorna true ou false normalmente se você quiser que o componente atualiza ou não
  shouldComponentUpdate(){

  }

  render(){
    return(
      <div>
        <h1>As horas são: {this.state.hora}</h1>
      </div>
    )
  }
}

export default App;