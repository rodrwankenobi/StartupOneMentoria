import './styles/Cadastro.css'
import React from 'react';
import logo from '../img/mentoria.jpg'
import UserPool from './UserPool';
import PasswordChecklist from "react-password-checklist";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

function Cadastro(){
    const [nome, setNome]                    = React.useState("");
    const [genero, setGenero]                = React.useState("Masculino");
    const [email, setEmail]                  = React.useState("");
    const [senha, setSenha]                  = React.useState("");
    const [telefone, setTelefone]            = React.useState("");
    const [dataNascimento,setDataNascimento] = React.useState(new Date());
    const [confirmar,setConfirmar]           = React.useState("");

    const onSubmit = (event) => {
        event.preventDefault();
    
        var attributeList = [
            new AmazonCognitoIdentity.CognitoUserAttribute({ 
                Name : 'name',
                Value : nome
            }),
            new AmazonCognitoIdentity.CognitoUserAttribute({ 
                Name : 'email',
                Value : email
            }),
            new AmazonCognitoIdentity.CognitoUserAttribute({ 
                Name : 'gender',
                Value : genero
            }),
            new AmazonCognitoIdentity.CognitoUserAttribute({ 
                Name : 'birthdate',
                Value : dataNascimento
            }),
            new AmazonCognitoIdentity.CognitoUserAttribute({ 
                Name : 'phone_number',
                Value : telefone
            })
        ];
    
        UserPool.signUp(nome, senha, attributeList, null, function(err, result){
            if (err) {
                alert(err.message || JSON.stringify(err));
                return;
            }
            var cognitoUser = result.user;
            alert('Usuário ' + cognitoUser.getUsername() + ' cadastrado com sucesso!');
            window.location.href="/login"
        });

    }
    return (
        <>  
            <div class="cadastro">
                <div class='logo'>
                    <img src={logo} alt=""/>
                </div>
                <h1 class="titulo-cadastro">Crie sua conta</h1>
                <form onSubmit={onSubmit}>
                        <div class="controle-cadastro">
                            <div class="label-cadastro">      
                                <label for="nome" class="label-cadastro">Nome:</label>
                            </div>
                            <div>      
                                <input type="text" class="input-cadastro" name="nome" onChange={(e) => setNome(e.target.value)}  required />
                            </div>
                        </div>
                        <div class="controle-cadastro">
                            <div class="label-cadastro">      
                                <label for="genero" >Gênero:</label>
                            </div>
                            <div>      
                                <select name="genero" class="select-cadastro input-cadastro"  onChange={(e) => setGenero(e.target.text)} >
                                    <option value="0">Masculino</option>
                                    <option value="1">Feminino</option>
                                </select>
                            </div>
                        </div>
                        <div class="controle-cadastro">
                            <div class="label-cadastro">      
                                <label for="data-nascimento">Data de Nascimento:</label>
                            </div>
                            <div>      
                                <input type="date" class="input-cadastro" name="data-nascimento" onChange={(e) => setDataNascimento(e.target.value)}  required />
                            </div>
                        </div>
                        <div class="controle-cadastro">
                            <div class="label-cadastro">      
                                <label for="email">E-mail:</label>
                            </div>
                            <div>      
                                <input type="email" name="email" class="input-cadastro"  onChange={(e) => setEmail(e.target.value)}  required />
                            </div>
                        </div>
                        <div class="controle-cadastro">
                            <div class="label-cadastro">      
                                <label for="password">Senha:</label>
                            </div>
                            <div>      
                                <input type="password" name="password" class="input-cadastro"  onChange={(e) => setSenha(e.target.value)}  required />
                            </div>
                        </div>
                        <div class="controle-cadastro">
                            <div class="label-cadastro">      
                                <label for="confirm-password">Confirmar Senha:</label>
                            </div>
                            <div>      
                                <input type="password" name="confirm-password" class="input-cadastro"  onChange={(e) => setConfirmar(e.target.value)}  required />
                            </div>
                        </div>
                        <div class="align-validation">
                            <PasswordChecklist
                                rules={["minLength","specialChar","number","capital","match"]}
                                minLength={8}
                                value={senha}
                                valueAgain={confirmar}
                                onChange={(isValid) => {}}
                                className="password-validation"
                                messages={{
                                    minLength: "Pelo menos 8 caracteres",
                                    specialChar: "Pelo menos 1 caractere especial.",
                                    number: "Pelo menos 1 número.",
                                    capital: "Pelo menos uma letra maiúscula.",
                                    match: "A senha e a confirmação são iguais.",
                                }}
                            />
                        </div>
                        <div class="controle-cadastro">
                            <div class="label-cadastro">      
                                <label for="telefone">Telefone:</label>
                            </div>
                            <div>        
                            <PhoneInput
                                placeholder="Digite o seu telefone"
                                country="BR"
                                value={telefone}
                                onChange={setTelefone}
                                className="input-cadastro-telefone"
                            />
                            </div>
                        </div>
                        <div class="submit">
                            <button onClick={e => onSubmit(e)} class="button-cadastro">Cadastrar</button>
                        </div>
                </form>
            </div>
        </>

    )
}

export default Cadastro;