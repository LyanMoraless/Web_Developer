import React from "react";

//O PARAMETRO DA FUNÇÃO É UMA PROPRIEDADE

function Card({ pokemon }) {
    return (
      <div className="Card">
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt="Foto do Pokemon" />
  
  
  
      </div>
    )
  }

  export default Card;