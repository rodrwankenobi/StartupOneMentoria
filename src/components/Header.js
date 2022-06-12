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
                        <li>
                            <a href="/mentores">
                                Encontre um Mentor
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Trilhas de Aprendizado
                            </a>
                        </li>
                        <li>
                            <a href="/paraempresas">
                                Para Empresas
                            </a>
                        </li>
                        <li>
                            <a href="/contato">
                                Contato
                            </a>
                        </li>
                        <li>
                            <a href="/about">
                                Sobre Nós
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

        </header>
    )
}

export default Header;