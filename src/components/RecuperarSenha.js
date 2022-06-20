import './styles/Recuperacao.css'
import React, {useState} from 'react';
import logo from '../img/mentoria.jpg'
import UserPool from './UserPool'
import { CognitoUser } from 'amazon-cognito-identity-js'

function RecuperarSenha(){
    const [email,setEmail] = useState();
    const [verificationState, setVerificationState] = useState(1);
    const [verificationCode, setVerificationCode] = useState();

    const enviarCodigo = (event,email) => {
        event.preventDefault();
    
        const cognitoUser = new CognitoUser({
            Username: email.toLowerCase(),
            Pool: UserPool
        });
    
        // call forgotPassword on cognitoUser
        cognitoUser.forgotPassword({
            onSuccess: function(result) {
                setVerificationState(2);
                alert(`Um e-mail de recuperação foi enviado para ${email}, verifique sua caixa de entrada!`)
            },
            onFailure: function(err) {
                alert(`Erro ao recuperar o usuário ${email} - ${err}`);
            },
            inputVerificationCode() { // this is optional, and likely won't be implemented as in AWS's example (i.e, prompt to get info)
                var verificationCode = prompt('Insira o seu código de recuperação: ', '');
                var newPassword = prompt('Insira a sua nova senha: ', '');
                cognitoUser.confirmPassword(verificationCode, newPassword, this);
            }
        });
    }
    const validarCodigo = () => {console.log('do nothing')}
    return (
        <>  
            <div class="recuperacao">
                <div class='logo-recuperacao'>
                    <img src={logo} class="img-recuperacao"/>
                    <h3>Recupere a sua senha</h3>
                </div>
                {verificationState === 1 && (
                        <form action="cadastrar" method="POST">
                            <div class="controle-recuperacao">
                                <div>      
                                    <label for="email" class="input-recuperacao" >E-mail:</label>
                                </div>
                                <div>      
                                    <input type="email" value={email} name="email" class="input-recuperacao" onChange={e => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div class="submit">
                                <button onClick={e => enviarCodigo(e,email)} class="button-recuperacao">Enviar</button>
                            </div>
                        </form>
                )}
                {verificationState === 2 && (
                    <form action="cadastrar" method="POST">
                        <div class="controle-recuperacao">
                            <div>      
                                <label for="verification-code" class="input-recuperacao" >Código de Verificação:</label>
                            </div>
                            <div>      
                                <input type="text" value={verificationCode} name="verification-code" class="input-recuperacao" onChange={e => setVerificationCode(e.target.value)}/>
                            </div>
                        </div>
                        <div class="submit">
                            <button onClick={e => validarCodigo(e,email)} class="button-recuperacao">Enviar</button>
                        </div>
                    </form>
                )}
            </div>
        </>
    )
}

export default RecuperarSenha;