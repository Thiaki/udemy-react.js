import React, {Component} from 'react';

class Formularios02 extends Component{

    constructor(props){
        super (props);
        this.state = {
            form: {
                nome: '',
                email: '',
                senha: '',
                sexo: ''
            }
        }
        this.dadosForm = this.dadosForm.bind(this);
    }

    dadosForm(e){
        // o this.state.form[o name do input que é igual o do objet que estamos guardando os dados] esta pegando o valor escrito nele
        this.state.form[e.target.name] = e.target.value;
        // setando o objeto form como o que colocamos
        this.setState({form: this.state.form});
    }
 
    render(){
        return(
            <div>
                <h1>Manipulação de Formulário Parte 02</h1>
                <h2>Login</h2>
                <label for="nome">Nome: </label>
                <input type="text" name="nome" value={this.state.form.nome} onChange={this.dadosForm} />
                <br/>
                <label for="email">Email: </label>
                <input type="email" name="email" value={this.state.form.email} onChange={this.dadosForm} />
                <br/>
                <label for="senha">Senha: </label>
                <input type="password" name="senha" value={this.state.form.senha} onChange={this.dadosForm} />
                <br/>
                <label for="sexo">Sexo: </label>
                <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <hr/>
            </div>
        )
    }
}

export default Formularios02;
