import "./InfoLivro.css"

function InfoLivro(props) {
    return (

        <div className="InfoLivro">

            <h1>{props.livro.nome}</h1>
            <img src={props.livro.img} alt={props.livro.nome}/>
            <h4>{props.livro.autor}</h4>

            <div className="row">
                <div className="col">
                    {props.livro.genero}
                </div>
                
                <div className="col">
                    {props.livro.ano}
                </div>
            </div>
            <p>{props.livro.sinopse}</p>
        </div>
    )
}

export default InfoLivro;