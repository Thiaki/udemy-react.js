import React, {Component} from "react";

class RenderizacaoCondicional extends Component{
    constructor(props){
        super(props);
        this.state = {
            // Controla o condicional
            logado: false
        }

        this.logar = this.logar.bind(this);
        this.deslogar = this.deslogar.bind(this);

    }

    logar(){
        this.setState({logado: true});
    }

    deslogar(){
        this.setState({logado: false});
    }

    render(){
        return(
            <div>
                {/* Utilizando o condicional ternário: */}
                {this.state.logado ? 
                <div>
                    <h2>Bem vindo ao sistema</h2>
                    <button onClick={this.deslogar}> Deslogar </button>
                </div>
                :
                <div>
                    <h2>Logue no sistema</h2>
                    <button onClick={this.logar}> Logar </button>
                </div>}
                <hr/>
            </div>
        )
    }

}

export default RenderizacaoCondicional;