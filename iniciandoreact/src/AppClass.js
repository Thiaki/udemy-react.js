// Colocar {Component} dentro do React
import React, {Component} from "react";

/*
  Sintaxe:

  class NOME-VARIAVEL extends Component{
    render(){
        return(
            <div>
                {Bloco-de-Código}
                {this.props.VARIAVEL}
            </div>
        );
    }
  }

  function NOME-APP(){
    return(
      <div>
      <NOME-VARIAVEL VARIAVEL="teste" />
      </div>
    )
  }

*/

class Equipe extends Component{
    render(){
        return(
            <div>
                <Pessoal nome={this.props.nome} cargo={this.props.cargo}/>
                <RedesSociais fb={this.props.facebook} yt={this.props.youtube} li={this.props.linkedin} />
                <hr/>
            </div>
        );
    }
}

class Pessoal extends Component{
    render(){
        return(
            <div>
                <h2>Olá sou o(a) {this.props.nome}</h2>
                <h2>Trabalho como {this.props.cargo}</h2>
            </div>
        );
    }
}

class RedesSociais extends Component{
    render(){
        return(
            <div>
                <a href={this.props.fb}>Facebook</a>
                <br/>
                <a href={this.props.yt}>Youtube</a>
                <br/>
                <a href={this.props.li}>Linkedin</a>
            </div>
        );
    }
}

function AppClass(){
    return(
        <div>
            <h2>Trabalhando com Class Component</h2>
            <Equipe nome="Eduardo" cargo="Programador" facebook="google.com" youtube="google.com" linkedin="google.com"/>
            <Equipe nome="João" cargo="Designer" facebook="google.com" youtube="google.com" linkedin="google.com"/>
        </div>
    )
}

export default AppClass;