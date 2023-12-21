### Aprendendo Sobre:

1. componentDidMount: Roda quando o componente for carregado na página (roda uma vez)
2. componentWillMount: É executado antes de carregar a página. Tudo que queria que rode antes do componente ser montado tem que ser aqui
3. componentDidUpdate: Roda quando o component tem seu state atualizado
4. shouldComponentUpdate: Retorna um true ou false. Poder comparar um state com outro vendo se deve atualizar ou não
5. componentWillUpdate: Executa se o shouldComponentUpdate retornar true
6. componentWillUnmont: Desmonta no DOM da página

7. Para passar um parâmetro de uma função no onCLick, devemos criar uma função anônima nela. Ex: onClick = { () => FUNÇÃO(PARÂMETRO) }

8. No arquivo de RenderizaçãoCondicional temos um cenário onde queremos renderizar uma coisa ou outra

9. Colocar key (atributo único) em uma div onde é gerada a cada array, por exemplo