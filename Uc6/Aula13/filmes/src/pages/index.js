import { useState, useEffect } from 'react';

import styles from '../../styles/Home.module.css';
import api from '../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, ListGroup, ListGroupItem, Row, Col, Container } from 'react-bootstrap'


//SE O EXPORT FOSSE: EXPORT API; O IMPORT SERIA DENTRO CHAVES
//(index.js) import { api } from '../services/api'
//(api.js) export const api = axios.create;

export default function Home() {

  const [filmes, setFilmes] = useState([]);

  useEffect(() => {

    async function loadFilms() {
      const response = await api.get('/movie/now_playing', {
        params: {
          api_key: 'bb62304363ff9a750abe29af399bb50b'
        }
      })

      setFilmes(response.data.results)

    }
    loadFilms()


  }, [])

  return (

    <div>

      <header className={styles.header}>
        <Container>
          <Row>
            <Col className={styles.colzinha}>
              Films API
            </Col>

            <Col></Col>
            <Col></Col>
            <Col></Col>

            <Col className={styles.colzinha2}>
              <a href=''>Now Playing</a>
            </Col>
            <Col className={styles.colzinha2}>
              Most Acess
            </Col>
            <Col className={styles.colzinha2}>
              Better Films
            </Col>
          </Row>
        </Container>
      </header>

      <div className={styles.title}>
        <h1>Now Playing</h1>
        <hr></hr>
      </div>

      <div className={styles.containerCenter}>


        {filmes.map((filme) => {

          return (



            <div key={filme.id}>
              <div className={styles.cards}>

                <Card>
                  <Card.Title>
                    <div className={styles.tilteCard}>
                      {filme.title}
                    </div>
                  </Card.Title>

                  <Card.Img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} />

                  <Card.Body>

                    <Card.Text>{filme.overview}</Card.Text>

                    <ListGroup className="list-group-flush">

                      <ListGroupItem>Popularidade {filme.popularity}</ListGroupItem>
                      <ListGroupItem>Lançamento {filme.release_date}</ListGroupItem>
                      <ListGroupItem>Avaliação {filme.vote_average}</ListGroupItem>

                    </ListGroup>

                  </Card.Body>

                </Card>

              </div>

            </div>







          )
        })}

      </div>
    </div>
  )


}
