import React, { Component } from 'react';
import './style.css'

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
    };

    this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 'O riso é a menor distância entre duas pessoas.', 'Deixe de lado as preocupações e seja feliz.', 'Realize o óbvio, pense no improvável e conquiste o impossível.', 'Acredite em milagres, mas não dependa deles.', 'A maior barreira para o sucesso é o medo do fracasso.'];

    this.abrirBiscoito = this.abrirBiscoito.bind(this);
  }

  abrirBiscoito(){
    let aleatorio = Math.floor(Math.random() * this.frases.length);
    this.state.textoFrase = '" ' + this.frases[aleatorio] + ' "';
    this.setState(this.state);
  }
  
  render(){
    return(
      <div className='container'>
        <img src={require('./assets/biscoito.png')} className='image' />
        <Botao text='Abrir Biscoito' acaoBtn={this.abrirBiscoito} />
        <h3>{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: props.text
    }
  }
  render(){
    return(
      <button onClick={this.props.acaoBtn}>{this.state.text}</button>
    )
  }
}

export default App;
