// Colocar {Component} dentro do React
import React, {Component} from "react";

/*
    Sintaxe:

    class NOME-VARIAVEL extends Component{

        contructor(props){
            super(props);
            this.state = {
                VARIAVEIS-ALTERAVEIS-01,
                VARIAVEIS-ALTERAVEIS-02
            }

            this.FUNCAO - this.FUNCAO.bind(this);
            
        }

        FUNCAO(){
            CODIGO-FUNCAO
        }

        render(){
            return(
                <div>
                    {this.state.VARIAVEIS-ALTERAVEIS-01}
                </div>
            )
        }

    }

*/


const Botao = (props) => {
    return(
        <div>
            <button onClick={props.funcao}>{props.text}</button>
        </div>
    )       
}

class AppClassEstados extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: 'Eduardo',
            contador: 0
        }

        // Mostrando qual função deve ser acessada
        this.aumentar = this.aumentarValor.bind(this);
        this.diminuir = this.diminuirValor.bind(this);
    }

    // Criar a função dentro da classe que será exportada
    aumentarValor(){
        let state = this.state;
        state.contador += 1;
        // setState faz com que atualize o constructor (state)
        this.setState({state});
    }

    diminuirValor(){
        let state = this.state;

        if (state.contador === 0){
            return;
        } 

        state.contador -= 1;
        this.setState({state});
    }

    render(){
        return(
            <div>
                <h2>Trabalhando com Estados do Class Component</h2>
                <h3>
                    <Botao text="-" funcao={this.diminuir} />
                    {this.state.contador}
                    <Botao text="+" funcao={this.aumentar} />
                </h3>
            </div>
        );
    }
}

export default AppClassEstados;