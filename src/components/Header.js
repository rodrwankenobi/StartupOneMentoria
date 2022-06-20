import logo from '../mentoria.jpg'
import './styles/Header.css'

function ItensMenu(){
    const logout = () => {
        localStorage.setItem("isAuthenticated",false);
    }
    return (
        <ul class="navbar-nav mr-auto">
            <li class="opcao-menu">
            <a href="/mentores" class="nav-link">
                    Encontre um Mentor
            </a>
            </li>
            <li class="opcao-menu">
            <a href="/" class="nav-link">
                    Trilhas de Aprendizado
            </a>
            </li>
            <li class="opcao-menu">
            <a href="/paraempresas" class="nav-link">
                    Para Empresas
            </a>
            </li>
            <li class="opcao-menu">
            <a href="/contato" class="nav-link">
                    Contato
            </a>
            </li>
            <li class="opcao-menu">
            <a href="/about" class="nav-link">
                    Sobre Nós
            </a>
            </li>
            <li class="opcao-menu">
            <a onClick={logout} href="/login" class="nav-link">
                    Sair
            </a>
            </li>
        </ul>
    )
}

function Header(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="brand">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                    <img class="img-logo" src={logo}/>
            </div>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ItensMenu />
            </div>
        </nav>
    )
}

export default Header;