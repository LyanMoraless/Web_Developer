function Livro(props) {

    return(
            <div>
                <img src={props.dadosDoLivro.img} />
                <h3>{props.dadosDoLivro.nome}</h3>
                <h4>{props.dadosDoLivro.autor}</h4>
    
                <div className="row">
                    <div className="col">
                    {props.dadosDoLivro.genero}
                    </div>

                    <div className="col">
                        {props.dadosDoLivro.ano}
                        {props.dadosDoLivro.sinopse}
                        {props.dadosDoLivro.preco}    
                    </div>
                </div>
    
            </div>
        )

}

export default Livro;