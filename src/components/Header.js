import logo from '../mentoria.jpg'
import './styles/Header.css'

function Header(){
    return (
        <header>
            <div class="brand">
                <img src={logo}/>
            </div>
            <nav>
                <ul>
                    <li>
                        Encontre um Mentor
                    </li>
                    <li>
                        <a href="/">
                            Trilhas de Aprendizado
                        </a>
                    </li>
                    <li>
                        Para Empresas
                    </li>
                    <li>
                        Contato
                    </li>
                    <li>
                        <a href="/about">
                            Sobre Nós
                        </a>
                    </li>
                    <li>
                        <a href="/login">
                            Login
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;