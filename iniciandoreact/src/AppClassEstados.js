import React, {Component} from "react";

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
                    <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                    <button onClick={this.aumentar}>+</button>
                </h3>
            </div>
        );
    }
}

export default AppClassEstados;