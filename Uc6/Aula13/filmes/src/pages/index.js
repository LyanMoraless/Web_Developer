import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import api from '../services/api';

import { Card, Button, ListGroup, ListGroupItem, Row, Col, Container } from 'react-bootstrap'

export default function Home() {

  const [marvelDates, setMarvelDates] = useState([])

  useEffect(() => {
    async function loadDates() {
      const respost = await api.get('/v1/public/comics', {
        params: {
          ts: 1,
          apikey: 'd61389e246bbe014547549a3adce2ea8',
          hash: '46c56a3ef7455b4d6731e00b64811e38'
        }
      })

      setMarvelDates(respost.data.data.results)
      console.log(respost)

    }

    loadDates()

  }, []);

  return (
    <div className={styles.container}>
      <h1>Marvel Comics</h1>
      {marvelDates.map((dados) => {
        return (
          <div key={dados.id}>
            <Container>
              <Row>
                <Col></Col>
                <Col>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={`${dados.thumbnail.path}/standard_fantastic.${dados.thumbnail.extension}`} />
                    <Card.Body>
                      <Card.Title>{dados.title}</Card.Title>
                      <Card.Text>Identador: {dados.id}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                <Col></Col>
              </Row>
            </Container>
          </div>

        )


      })}
    </div>
  )
}