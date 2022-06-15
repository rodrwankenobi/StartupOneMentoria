import './styles/Cadastro.css'
import React, {useState} from 'react';
import logo from '../img/mentoria.jpg'

const recuperarSenha = (event,email) => {
    event.preventDefault();
    alert(`Um e-mail de recuperação foi enviado para ${email}, verifique sua caixa de entrada!`)
}
function RecuperarSenha(){
    const [email,setEmail] = useState();
    return (
        <>  
            <div class='logo'>
                <img src={logo} alt=""/>
            </div>
            <h1>Recupere a sua senha</h1>
            <div class="cadastro">
                <form action="cadastrar" method="POST">
                    <div class="controle-cadastro">
                        <div>      
                            <label for="email" class="input-cadastro" >E-mail:</label>
                        </div>
                        <div>      
                            <input type="email" value={email} name="email" class="input-cadastro" onChange={e => setEmail(e.target.value)}/>
                        </div>
                    </div>

                    <div class="submit">
                        <button onClick={e => recuperarSenha(e,email)} class="button-cadastro">Enviar</button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default RecuperarSenha;