import './styles/Login.css'
import { useState } from 'react'
import { Amplify } from 'aws-amplify';

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorPassword, setErrorPassword] = useState();
    
    return (
        <>
            <div class="login">
                <div class="presentation">
                    <div class="logo">
                        <img src="https://storage.googleapis.com/mentoria20iagrp4/mentoria.jpg" alt=""/>
                    </div>
                    <div class="presentation-text">
                        Faça seu Login na Plataforma
                    </div>
                </div>

                <div class="login-form">
                    <form>
                    <div class="controle-login">
                        <label for="email">Email</label>
                        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div class="controle-login">
                        <label for="password">Senha</label>
                        <input type="password" name="password" value={password}  onChange={(e) => (e.target.value)}/>
                    </div>
                    <span><a>Esqueci minha senha</a></span>
                    <div class="botao-login">       
                        <button>Entrar</button>
                    </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login;