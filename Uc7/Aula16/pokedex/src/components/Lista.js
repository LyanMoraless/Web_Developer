import React, { useContext } from "react";
import { Context } from "../contexts/PokemonContext";
import ListaItem from "./ListaItem";

//O PARAMETRO DA FUNÇÃO É UMA PROPRIEDADE

function Lista() {
    
    const {pokemon, pokemons, proximos, selecionar} = useContext(Context);

    return (
      <div className="Lista">
  
        <h2>Pokemons</h2>
  
        <div className="list-group">
  
          {pokemons.map(p => (
            <a className={'list-group-item list-group-item-action ' + (p == pokemon ? 'active' : '')} onClick={() => selecionar(p)} key={p.name}>
              <ListaItem pokemon={p} />
            </a>
          ))}
          <div>
            <a className="list-group-item list-group-item-action" onClick={() => proximos()}>Mais</a>
          </div>
  
        </div>
  
      </div>
    )
  }

  export default Lista;