import './styles/About.css'
import Header from "./Header"
import Footer from "./Footer"

const About = () => {
    return (
    <>
        <Header />
            <div id="about">
                <h3>Contrate nossos serviços para sua Empresa</h3>
                <div class="text-about">
                <p class="paragraph-about">Temos serviços exclusivos para Empresas.</p>
                <p class="paragraph-about">Na nossa plataforma, possuímos programas de mentoria interna, para ajudar analistas que pretendem se tornar gestores.</p>
                <p class="paragraph-about">Além disso, temos a funcionalidade de gerar trilhas de cursos para o desenvolvimento profissional dos seus funcionários.</p>
                </div>
            </div>
                
        <Footer />
    </>

    )

}

export default About;