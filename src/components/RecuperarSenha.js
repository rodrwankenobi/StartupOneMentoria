import './styles/Recuperacao.css'
import React, {useState} from 'react';
import logo from '../img/mentoria.jpg'
import UserPool from './UserPool'
import { CognitoUser } from 'amazon-cognito-identity-js'

function RecuperarSenha(){
    const [email,setEmail] = useState();
    const [verificationState, setVerificationState] = useState(1);
    const [verificationCode, setVerificationCode] = useState();
    const [senha, setSenha] = useState();
    const [confirmarSenha,setConfirmarSenha] = useState();

    const enviarCodigo = (event,email) => {
        event.preventDefault();
    
        const cognitoUser = new CognitoUser({
            Username: email.toLowerCase(),
            Pool: UserPool
        });
        setVerificationState(2);

        // call forgotPassword on cognitoUser
        cognitoUser.forgotPassword({
            onSuccess: function(result) {
                setVerificationState(2);
                alert(`Um e-mail de recuperação foi enviado para ${email}, verifique sua caixa de entrada!`)
            },
            onFailure: function(err) {
                alert(`Erro ao recuperar o usuário ${email} - ${err}`);
            },
        });
    }
    const validarCodigo = (event,email) => {
        event.preventDefault();
        if(senha != confirmarSenha) {
            alert("A senha e a confirmação estão diferentes.")
            return
        }
        const cognitoUser = new CognitoUser({
            Username: email.toLowerCase(),
            Pool: UserPool
        });

        cognitoUser.forgotPassword(
                {
                    onSuccess: (data) => {
                        alert("Senha alterada com sucesso!");
                        window.location.href = "/login";
                    },
                    onFailure: (err) => {
                        alert(`Erro na alteração da Senha ${err}`)
                    },
            }
        );
    }
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
                        <div class="controle-recuperacao">
                            <div>      
                                <label for="senha" class="input-recuperacao" >Nova Senha:</label>
                            </div>
                            <div>      
                                <input type="text" value={senha} name="senha" class="input-recuperacao" onChange={e => setSenha(e.target.value)}/>
                            </div>
                        </div>
                        <div class="controle-recuperacao">
                            <div>      
                                <label for="confirmar-senha" class="input-recuperacao" >Confirme a Nova Senha:</label>
                            </div>
                            <div>      
                                <input type="text" value={confirmarSenha} name="confirmar-senha" class="input-recuperacao" onChange={e => setConfirmarSenha(e.target.value)}/>
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