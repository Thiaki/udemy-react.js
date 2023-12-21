import React, { Component } from 'react';

class PraticandoFormulario extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: ''
        }

        this.enviado = this.enviado.bind(this);
    }

    enviado(e){
        // Descontruindo o objeto state
        const {nome, email, senha} = this.state;
        if(nome === '' || email === '' || senha === ''){
            alert('Cadastro Inválido\nCampo Vazio')
        }
        else{
            alert(`Cadastro enviado
            Nome: ${nome}
            E-mail ${email}
            Senha ${senha}`)
        }

        e.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Treinando Manipulação de Formulário</h1>
                <h2>Cadastro de Novo Usuário</h2>
                <form onSubmit={this.enviado}>
                    <label for="nome">Nome: </label>
                    <input type="text" name='nome' value={this.state.nome} onChange={ (e) => this.setState({nome: e.target.value}) } />
                    <br/>
                    <label for="email">E-mail: </label>
                    <input type="email" name='email' value={this.state.email} onChange={ (e) => this.setState({email: e.target.value}) } />
                    <br/>
                    <label for="senha">Senha: </label>
                    <input type="password" name='senha' value={this.state.senha} onChange={ (e) => this.setState({senha: e.target.value })} />
                    <br/>
                    <button type='submit'>Enviar</button>
                </form>

            </div>
        )
    }
}

export default PraticandoFormulario;
