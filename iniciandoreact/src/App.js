import React from 'react';

/*
  Sintaxe:

  const NOME-VARIAVEL = (props) => {
    return(
      <div>
        {Bloco-de-Código}
        {props.VARIAVEL}
      </div>
    )
  }

  function NOME-APP(){
    return(
      <div>
      <NOME-VARIAVEL VARIAVEL="teste" />
      </div>
    )
  }

*/

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <MidiasSociais facebook={props.facebook} youtube={props.youtube} linkedin={props.linkedin} />
      <hr/>
    </div>
  )
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá sou o (a) {props.nome}</h2>
    </div>
  )
}

const MidiasSociais = (props) =>{
  return(
    <div>
      <a href={props.facebook}>Facebook</a>
      <br/>
      <a href={props.youtube}>Youtube</a>
      <br/>
      <a href={props.linkedin}>LinkedIn</a>
    </div>
  )
}

function App(){
  return(
    <div>
      <h2>Trabalhando com Props e Component</h2>
      <Equipe nome="Ronaldo" cargo="Programador" idade="30"
              facebook='google.com' />
      <Equipe nome="Jorge" cargo="Designer" idade="40" />
    </div>
  )
}

export default App;