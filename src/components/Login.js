import './styles/Login.css'
import { useState } from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from './UserPool';
import logo from '../img/mentoria.jpg'

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onSubmit = (event) => {
        event.preventDefault();

        const userData = {
            Username: email,
            Pool: UserPool
        };

    
        const cognitoUser = new CognitoUser( userData );
        const authenticationData = {
            Username: email,
            Password: password
        };
        const setWithExpiry = (key, value, ttl) => {
            const now = new Date()
        
            // `item` is an object which contains the original value
            // as well as the time when it's supposed to expire
            const item = {
                value: value,
                expiry: now.getTime() + ttl,
            }
            localStorage.setItem(key, JSON.stringify(item))
        }
        var authenticationDetails = new AuthenticationDetails( authenticationData );

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: result => {
                alert("Login realizado com sucesso");
                setWithExpiry('isAuthenticated',true,1800000);
                window.location.href = "/";
            },
            onFailure: err => {
                localStorage.setItem('isAuthenticated',false);
                alert('Erro no login, tente novamente')
            }
        });
    }

    return (
        <>
            <div class="login">
                <div class="presentation">
                    <div class="logo-login">
                        <img src={logo} alt=""/>
                    </div>
                    <div class="presentation-text">
                        Faça seu Login na Plataforma
                    </div>
                </div>

                <div class="login-form">
                <form onSubmit={onSubmit}>
                    <div class="controle-login">
                        <label class="label-login"  for="email">Email</label>
                        <input class="input-login" type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </div>
                    <div class="controle-login">
                        <label class="label-login"  for="password">Senha</label>
                        <input type="password" class="input-login" name="password" value={password}  onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div class="botao-login">       
                        <button class="btn-login" onClick={onSubmit}>Entrar</button>
                    </div>
                        <a href="/cadastro"><p align="center">Não possui cadastro? Clique aqui.</p></a>
                        <a href="/recuperarsenha"><p align="center">Esqueci minha senha</p></a>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login;