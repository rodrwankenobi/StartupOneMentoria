import './styles/Login.css'
import { useState, useContext, useEffect } from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from './UserPool';
import { MyContext } from '../providers/auth';
import logo from '../../public/img/mentoria.jpg'

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const {token, handleLogin} = useContext(MyContext);

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
        var authenticationDetails = new AuthenticationDetails( authenticationData );

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: result => {
                handleLogin(true);
            },
            onFailure: err => {
                handleLogin(false);
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
                    </form>
                </div>
            </div>
        </>

    )
}

export default Login;