import React, { Component } from 'react';
import './style.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      cronometro: 0,
      iniciar: true
    };

    this.timer = null
    this.limpar = this.limpar.bind(this);
    this.iniciar = this.iniciar.bind(this);

  }

  limpar(){
    clearInterval(this.timer);
    this.timer = null;
    this.setState({cronometro: 0});
    this.setState({iniciar: true})
  }

  iniciar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({iniciar: true})
    }
    else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.cronometro += 0.1;
        this.setState(state);
      }, 100)
      this.setState({iniciar: false})
    }
  }

  render(){
    return (
    <div className='background-cronometro'>
      <img src = {require('./assets/cronometro.png')} />
      <h1 className='cronometro'>{this.state.cronometro.toFixed(1)}</h1>
      <div className='block-btn-cronometro'>
        <button className='btn-cronometro' onClick={this.iniciar}>{this.state.iniciar ? 'Iniciar' : 'Pausar'}</button>
        <button className='btn-cronometro' onClick={this.limpar}>Limpar</button>
      </div>
    </div>
    );
  }
}

export default App;
