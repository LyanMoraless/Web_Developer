import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap"

const POKEMON_API = "https://pokeapi.co/api/v2"

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    (
      async () => {
        const req = await fetch(`${POKEMON_API}/pokemon`);
        const data = await req.json();
        setNext(data.next);
        setPokemons(data.results);
      }
    )();

  }, []);

  const proximos = async () => {
    const req = await fetch(next);
    const data = await req.json();
    setNext(data.next);
    setPokemons([...pokemons, ...data.results]);
  }

  const selecionar = (pokemon) => {
    setPokemon(pokemon);
  }

  return (
    <div className="App">

      {pokemon && (
        <Detalhe pokemon={pokemon} />
      )}

      <div className="container">
        <h1>Pokedex</h1>

        <div className="row">
          <div className="col">
          </div>
          <div className="col">
            <Lista pokemons={pokemons} onNext={proximos} onSelecionar={selecionar} />
          </div>
        </div>

      </div>

    </div>
  );
}

//O PARAMETRO DA FUNÇÃO É UMA PROPRIEDADE

function Lista({ pokemons, onNext, onSelecionar }) {
  return (
    <div className="Lista">

      <h2>Pokemons</h2>

      <div className="list-group">

        {pokemons.map(p => (
          <a className="list-group-item list-group-item-action" onClick={() => onSelecionar(p)} key={p.name}>
            <ListaItem pokemon={p} />
          </a>
        ))}
        <div>
          <a className="list-group-item list-group-item-action" onClick={onNext}>Mais</a>
        </div>

      </div>

    </div>
  )
}

function ListaItem({ pokemon }) {

  const [item, setItem] = useState();

  useEffect(() => {

    (
      async () => {
        const req = await fetch(`${POKEMON_API}/pokemon-form/${pokemon.name}/`);
        setItem(await req.json());
      }
    )();

  }, [pokemon]);

  if (!item) return "Carregando...";

  return (
    <div>
      <img src={item.sprites.front_default} />
      {pokemon.name}



    </div>
  )
}

//O PARAMETRO DA FUNÇÃO É UMA PROPRIEDADE

function Detalhe({ pokemon }) {

  const [item, setItem] = useState();

  useEffect(() => {

    (
      async () => {
        const req = await fetch(`${POKEMON_API}/pokemon-form/${pokemon.name}/`);
        setItem(await req.json());
      }
    )();

  }, [pokemon]);

  if (!item) return "Carregando...";

  return (
    <Modal.Dialog show={item}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>

        <Card pokemon={item} />

      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>

  )
}

//O PARAMETRO DA FUNÇÃO É UMA PROPRIEDADE

function Card({ pokemon }) {
  return (
    <div className="Card">
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="Foto do Pokemon" />



    </div>
  )
}

export default App;
