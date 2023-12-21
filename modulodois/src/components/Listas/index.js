import React, {Component} from "react";

class Listas extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Eduardo', curtidas: 10, comentarios: 5},
                {id: 2, username: 'Jorge', curtidas: 109, comentarios: 35},
                {id: 3, username: 'Matheus', curtidas: 1660, comentarios: 545},
                {id: 4, username: 'Robson', curtidas: 0, comentarios: 1},
            ]
        }
    }

    render(){
        return(
            <div>
                <h2>Feed</h2>
                {this.state.feed.map((item) => {
                    return(
                        // Colocar essa key para diferenciar cada item (recomendado pelo react)
                        <div key = {item.id}>
                            <h4>{item.username}</h4>
                            <a>{item.curtidas} {item.curtidas > 1 ? "curtidas" : "curtida"} / {item.comentarios} {item.comentarios > 1 ? "comentarios" : "comentario"}</a>
                            <hr/>
                        </div> 
                    );
                })}
            </div>
        )
    }

}

export default Listas;
