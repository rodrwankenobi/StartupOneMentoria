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
                        Trilhas de Aprendizado
                    </li>
                    <li>
                        Para Empresas
                    </li>
                    <li>
                        Contato
                    </li>
                    <li>
                        Sobre Nós
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;