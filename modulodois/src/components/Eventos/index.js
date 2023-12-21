import React, {Component} from "react";

class Eventos extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            nome: props.nome
        }

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
        this.digitarUser = this.digitarUser.bind(this);

    }

    entrar(nome){
        this.setState({nome: nome});
    }

    sair(){
        let nome = "";
        this.setState({nome});
    }

    digitarUser(){
        return prompt("Digite seu usuário");
    }

    render(){
        return(
            <div>
                <h3> Bem Vindo(a) {this.state.nome}</h3>
                {/* Para passar um parâmetro de uma função deve criar uma função anônima.
                    Ex: onClick = { () => FUNÇÃO(PARÂMETRO) } */}
                <button onClick={ () => this.entrar(this.digitarUser()) }>Entrar</button>
                <button onClick={this.sair}>Sair</button>

                <hr/>
            </div>
        )
    }

}

export default Eventos;