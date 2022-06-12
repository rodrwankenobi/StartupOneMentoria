import './styles/About.css'
import Header from "./Header"
import Footer from "./Footer"

const About = () => {
    return (
    <>
        <Header />
            <div id="about">
                <h3>MentorIA - A inteligência artificial ajudando você a alavancar sua carreira</h3>
                <div class="text-about">
                <p class="paragraph-about">Somos uma empresa focada em desenvolvimento profissional, com o objetivo de resolver o problema da falta de um direcionamento para alcançar um objetivo de carreira.</p>
                <p class="paragraph-about">O MentorIA é uma solução de Inteligência Artificial, que analisa os melhores maiores redes sociais profissionais, e monta uma trilha de aprendizado baseado nas descrições de vagas e perfis de pessoas que já alcançaram o seu objetivo.</p>
                <p class="paragraph-about">Além disso, temos a funcionalidade de Encontrar um Mentor, onde pessoas que procuram ajuda, encontram profissionais que querem treinar suas habilidades de gestão de pessoas, trazendo um desenvolvimento mútuo.</p>
                </div>
            </div>
                
        <Footer />
    </>

    )

}

export default About;