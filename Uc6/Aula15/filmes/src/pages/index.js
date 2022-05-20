import { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import api from '../services/api';

import Link from 'next/link'

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
    <div>

      <div className={styles.x}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </div>

      <div className={styles.container}>
        {marvelDates.map((dados) => {
          return (
            <div key={dados.id} className={styles.card}>

{/* CARD ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

              <div className={styles.title}>{dados.title}</div>
              <img src={`${dados.thumbnail.path}/standard_fantastic.${dados.thumbnail.extension}`}></img>
              <div>{dados.id}</div>

{/* CARD ---------------------------------------------------------------------------------------------------------------------------------------------------- */}

            </div>
          )
        })}
      </div>
    </div>
  )
}