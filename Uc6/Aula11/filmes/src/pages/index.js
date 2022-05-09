import styles from '../../styles/Home.module.css'
import api from '../services/api'

//SE O EXPORT FOSSE: EXPORT API; O IMPORT SERIA DENTRO CHAVES
//(index.js) import { api } from '../services/api'
//(api.js) export const api = axios.create;

export default function Home() {

  async function loadFilms() {
    const response = await api.get('/movie/now_playing', {
      params: {
        api_key: 'bb62304363ff9a750abe29af399bb50b'
      }
    })

    console.log(response)

  }
  loadFilms()
  
  return (

    <div className={styles.containerCenter}>
      <h1>Pagina inicial dos filmes</h1>
      
    </div>
    
  )
    
  
}
