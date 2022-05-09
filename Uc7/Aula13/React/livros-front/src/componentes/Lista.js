import React from "react";
import Livro from "./Livro";
import InfoLivro from "./InfoLivro"

class Lista extends React.Component{
    constructor(props) {
        super(props);

        this.state = {

            livroSelecionado: {
                nome: "Guia do Mochileiro das Galáxias",
                img: "https://via.placeholder.com/400x300?text=Vai+Corinthians",
                autor: "Douglas Adams",
                genero: "Ficção",
                ano: "1980",
                sinopse: "Consequat officia pariatur eiusmod ea deserunt. Dolore aliqua esse nisi tempor laborum amet tempor reprehenderit in labore. Nostrud cupidatat in reprehenderit occaecat qui ut dolore laboris. Officia eu enim incididunt elit exercitation consequat labore veniam magna nisi nulla.",
                preco: "R$: 200,00"
            },

            livros: [

            {
                nome: "Guia do Mochileiro das Galáxias",
                img: "https://via.placeholder.com/400x300?text=Vai+Corinthians",
                autor: "Douglas Adams",
                genero: "Ficção",
                ano: "1980",
                sinopse: "Consequat officia pariatur eiusmod ea deserunt. Dolore aliqua esse nisi tempor laborum amet tempor reprehenderit in labore. Nostrud cupidatat in reprehenderit occaecat qui ut dolore laboris. Officia eu enim incididunt elit exercitation consequat labore veniam magna nisi nulla.",
                preco: "R$: 200,00"
            },
            {
                nome: "Guia do Mochileiro das Galáxias-2",
                img: "https://via.placeholder.com/400x300?text=Vai+Corinthians",
                autor: "Douglas Adams-2",
                genero: "Ficção-2",
                ano: "1980-2",
                sinopse: "Irure ut fugiat ullamco mollit ex ut. Qui quis ipsum anim sit minim. Aliquip aliqua velit ex occaecat duis. Consequat amet commodo ut qui ipsum velit ipsum adipisicing deserunt non magna aliquip Lorem. Cupidatat anim quis ipsum elit in laboris eiusmod minim culpa Lorem quis sit commodo.",
                preco: "R$: 150,00"
            },
            {
                nome: "Guia do Mochileiro das Galáxias-3",
                autor: "Douglas Adams-3",
                genero: "Ficção3",
                ano: "1980-3",
                sinopse: "Qui voluptate commodo id nulla. Eiusmod irure nostrud aliqua ullamco. Non laborum ea voluptate esse do mollit deserunt proident occaecat. Consectetur consequat eiusmod sit excepteur dolore exercitation mollit veniam. Elit velit aliqua esse aliqua culpa minim nisi id. Ea anim fugiat aliqua consectetur deserunt eiusmod minim laborum minim in reprehenderit eiusmod qui.",
                preco: "R$: 100,00"
            }

        ]
        }
    }

    livrosLista() {
        const livros = this.state.livros;
        return livros.map(livro => <li><Livro dadosDoLivro={livro} /></li>)
    }

    render() {
        return (
            <div className="Lista">

                {/* <InfoLivro livro={this.state.livroSelecionado}/> */}

                <h1>Livros</h1>
                <ul>
                   
                    {this.livrosLista()}
                   
                </ul>
    
            </div>
        )
    }
}

export default Lista;