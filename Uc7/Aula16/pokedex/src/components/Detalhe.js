import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { POKEMON_API } from "../settings";
import Card from "./Card";

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

  export default Detalhe;