import React, { useContext, useEffect } from "react";
import Detalhe from "../components/Detalhe";
import Lista from "../components/Lista";
import { Context } from "../contexts/PokemonContext";

function ListaPage() {

    const { pokemon, consultar } = useContext(Context);

    useEffect(() => {
        consultar();
    }, []);

    return (
        <div>

            {pokemon && (
                <Detalhe pokemon={pokemon} />
            )}

            <div className="container">
                <h1>Pokedex</h1>

                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col">
                        <Lista />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ListaPage;