import { Divider } from "@aws-amplify/ui-react";
import "./styles/Contato.css";
import Footer from "./Footer"
import Header from "./Header"

export default function Contato() {
  return (
      <>
        <Header />
        <div class="contact">
            <div class="contact-form">
              <form>
                  <h3>
                  Preencha os dados abaixo, e em breve um de nossos
                  representantes entrará em contato.
                  </h3>
                  <input class="input-contact" type="text" placeholder="Digite o seu nome"/>
                  <input class="input-contact" type="email"  placeholder="Digite o seu e-mail" />
                  <select class="select-contact" placeholder="Selecione o motivo do contato">
                    <option>Dúvidas</option>
                    <option>Sugestões</option>
                    <option>Informar um Problema</option>
                    <option>Outros</option>
                  </select>
                  <textarea class="textarea" placeholder="Digite a sua mensagem"></textarea>
                  <button class="btn-contact">Enviar</button>
              </form> 
            </div>
        </div>
        <Footer />
      </>

  );
}
