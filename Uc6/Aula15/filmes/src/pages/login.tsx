import styles from '../../styles/Home.module.css';
import { FormEvent, useState } from 'react';
import api2 from '../services/api2'

export default function Login() {

    const [login, setLogin] = useState('');
    const [senha, setPassword] = useState('');
    const [token, setToken] = useState('');

    async function submitForm(event: FormEvent) {
        event.preventDefault();

        if() {
            
        }
        
        const response = await api2.post('logar', {
            login,
            senha
        })    

        console.log(response)

    }

    return (
        <div className={styles.y}>
            <h1 className={styles.title2}>Login</h1>

            <div className={styles.container2}>
                <form onSubmit={submitForm}>
                    
                    {/* e = event (está armazenando o efeito de mudança) */}

                    <input value={login} 
                    onChange={ (e) => setLogin(e.target.value)} 
                    type='text' 
                    placeholder='Informe seu email'>
                    </input>

                    <br></br>

                    <input value={senha}
                    onChange={ (e) => setPassword(e.target.value)} 
                    type='password' 
                    placeholder='Insira sua senha'>
                    </input>

                    <br></br>

                    <button className={styles.btn} type='submit'>Submit</button>

                </form>
            </div>

        </div>
    )


}