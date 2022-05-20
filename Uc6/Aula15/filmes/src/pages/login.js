import styles from '../../styles/Home.module.css';
import { useState } from 'react';

export default function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function submitForm() {
        console.log(login)
        console.log(password)
        if(login || password != ''){
            alert('Seu formulário foi enviado com sucesso!')
        }
        else{
            alert('Houve algum problema')
        }
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

                    <input value={password}
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