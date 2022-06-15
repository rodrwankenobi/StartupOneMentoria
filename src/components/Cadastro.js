import './styles/Cadastro.css'
import React from 'react';
import logo from '../img/mentoria.jpg'

function Cadastro(){
    return (
        <>  
            <div class='logo'>
                <img src={logo} alt=""/>
            </div>
            <h1>Crie sua conta</h1>
            <div class="cadastro">
                <form action="cadastrar" method="POST">
                    <div class="controle-cadastro">
                        <div>      
                            <label for="nome">Nome:</label>
                        </div>
                        <div>      
                            <input type="text" class="input-cadastro" />
                        </div>
                    </div>
                    <div class="controle-cadastro">
                        <div>      
                            <label for="genero">Gênero:</label>
                        </div>
                        <div>      
                            <select name="genero" class="select-cadastro" >
                                <option value="0">Masculino</option>
                                <option value="1">Feminino</option>
                            </select>
                        </div>
                    </div>
                    <div class="controle-cadastro">
                        <div>      
                            <label for="email" class="input-cadastro" >E-mail:</label>
                        </div>
                        <div>      
                            <input type="email" name="email" class="input-cadastro" />
                        </div>
                    </div>
                    <div class="controle-cadastro">
                        <div>      
                            <label for="password">Senha:</label>
                        </div>
                        <div>      
                            <input type="password" name="password" class="input-cadastro" />
                        </div>
                    </div>
                    <div class="controle-cadastro">
                        <div>      
                            <label for="telefone">Telefone:</label>
                        </div>
                        <div>        
                            <input type="phone" name="telefone"  class="input-cadastro" 
                                pattern="([0-9]{2})[0-9]{5}-[0-9]{4}"/>
                        </div>
                    </div>
                    <div class="submit">
                        <button class="button-cadastro">Cadastrar</button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Cadastro;