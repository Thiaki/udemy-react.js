import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';

function App() {
    // Criando as state.
    // Primeiro valor é o nome da state e o segundo é a função para ser atualizada a state
    const [tarefas, setTarefas] = useState([]);
    // Explicação: Criando a state tarefas com o valor vazio e passando o setTarefas para atualizar esse state
    
    const [input, setInput] = useState('');
    


    // Criando ciclos de vida das variáveis
    // Primeiro valor é a função dentro dele e a segunda são as states monitoradas por ele
    useEffect(() => {
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }, [tarefas]);
    // Explicação: Toda vez que a variável do segundo parâmetro (tarefas) for rendereziada, vai fazer a função do primeiro parâmetro (salvar dentro do localStorage as tarefas para que ao carregar a página, continue salvo)

    // Função carregada automaticamente com a página
    useEffect(() => {
      const tarefasStorage = localStorage.getItem('tarefas');
      if (tarefasStorage){
        setTarefas(JSON.parse(tarefasStorage))
      }
    }, []);



    // Função executada quando a state for atuaizada
    const totalTarefas = useMemo(() => tarefas.length, [tarefas])
    // Explicação: Passa pra variável totalTarefas a quantidade de tarefas.lenght todas as vezes que tarefas for atualizada



    // useCallback faz com que a função seja rodada apenas quando utiliza-la
    // Primeiro parâmetro é a função de callback e a segunda é todas as states utilizadas dentro da função
    const handleAdd = useCallback(() => {
      input === '' ? alert("Campo Vazio") : setTarefas([...tarefas, input])
      setInput('');
    }, [tarefas, input])



    return (
      <div>
        <h1>Hooks</h1>
        <ul>
          {tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>

        <br/>
        Você tem {totalTarefas} tarefas!
        <br/>
    
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='button' onClick={handleAdd}>Adicionar</button>
      </div>
    );
  
}

export default App;
