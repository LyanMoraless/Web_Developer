import React, {useEffect, useState} from "react";
import Livro from "../components/Livro";
import { getLivros, livrosDados, login } from "../dados";
import InfoLivroPage from "./InfoLivroPage";

function ListaPage() {

    const [livros, setLivros] = useState([]);
    const [token, setToken] = useState();
    const [livroSelecionado, setLivroSelecionado] = useState(null);
    //O RETURN NESSA FUNÇÃO NÃO É NECESSÁRIO//

    const carregarLivros = () => {
        return setLivros(livrosDados);
    }

    //É EXECUTADO QUANDO O COMPONENTE É MONTADO, ESTÁ FAZENDO O PAPEL DO BOTÃO//

     useEffect(() => {
        login("carlosmaiello@gmail.com", "123").then(res => {  
            setToken(res.token);
            })
     });

     useEffect(() => {
        getLivros(token).then(livros => setLivros(livros));
     }, [token]);

     if (!token) return "Aguarde..."

    const listaLivros = () => {
        return livros.map(livro => <li className="col-3"><Livro dados={livro} click={() => setLivroSelecionado(livro)}/> </li>);
    }


    return (
    
        <div className="ListaPage">
            {livroSelecionado != null &&
                (
                    <InfoLivroPage livro={livroSelecionado} fechar={() => 
                        setLivroSelecionado(null)}/>
                )
            }

            <h1>Lista de Livros</h1>
            {/* <button onClick={carregarLivros}>Carregar</button> */}
            <ul className="list-unstyled row">{listaLivros()}</ul>

        </div>

    )

}

export default ListaPage;