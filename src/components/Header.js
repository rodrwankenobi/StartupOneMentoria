import logo from '../mentoria.jpg'
import './styles/Header.css'

function Header(){
    return (
        <header>
            <div class="brand">
                <img src={logo}/>
            </div>
            <div>
                <nav>
                    <ul>
                        <a href="/mentores">
                        <li>
                                Encontre um Mentor
                        </li>
                        </a>
                        <a href="/">
                        <li>
                                Trilhas de Aprendizado
                        </li>
                        </a>
                        <a href="/paraempresas">
                        <li>
                                Para Empresas
                        </li>
                        </a>
                        <a href="/contato">
                        <li>
                                Contato
                        </li>
                        </a>
                        <a href="/about">
                        <li>
                                Sobre Nós
                        </li>
                        </a>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header;