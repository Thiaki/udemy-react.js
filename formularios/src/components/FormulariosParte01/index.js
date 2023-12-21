import React, {Component} from 'react';

class Formularios01 extends Component{

    constructor(props){
        super (props);
        this.state = {
            email: '',
            senha: '',
            sexo: ''
        }
        this.trocaEmail = this.trocaEmail.bind(this);
    }

    // e -> está para pegar o evendo clicado ou escrito
    trocaEmail(e){
        // Sintaxe para pegar o valor do evento digitado
        let valorDigitado = e.target.value;
        this.setState({email: valorDigitado});
    }

    render(){
        return(
            <div>
                <h1>Manipulação de Formulário Parte 01</h1>
                <h2>Login</h2>
                <label for="email">Email: </label>
                {/* onChange é colocado em lugares onde o usuário pode mudar com autonomia, nesse caso colocamos uma função para pegar todos os eventos dele */}
                <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail} />
                <br/>
                <label for="senha">Senha: </label>
                {/* onChange passado automaticamente por função anônima */}
                <input type="password" name="senha" value={this.state.senha} onChange={(e) => (this.setState({senha: e.target.value}))} />
                <br/>
                <label for="sexo">Sexo: </label>
                <select name="sexo" value={this.state.sexo} onChange={ (e) => this.setState({sexo: e.target.value}) }>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <hr/>
            </div>
        )
    }
}

export default Formularios01;
