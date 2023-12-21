### Aprendendo Sobre:

1. Utiliamos onChange para quando o usuário pode modificalo constantemente. Colocado principalmente em input onde o usuário pode digitar e ficar mudando sempre
2. Modificar o state desse campo com onChange: onChange={(e) => (this.setState({nome-variavel: e.target.value}))} . Desse jeito pegamos o evendo digitado (e) e atualizamos o state (this.setState) do nome-variavel com o valor do evento escrito (e.target.value)
3. Para deixar o item 2 em uma úniac função para todos os campos: 
     nome-funcao(e){
        this.state.form[e.target.name] = e.target.value;
        this.setState({nome-variavel: this.state.form});
    }
4. 
