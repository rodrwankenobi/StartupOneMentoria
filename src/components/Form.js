import './styles/Form.css'
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Trilha from './Trilha'

const handleSubmit = text => event => {
    return (
        render(<Trilha/>)
        
        )
    }
    
class FormTrilha extends React.Component {
    constructor(props) {
        super(props);
        this.cargoDesejado='Engenheiro de Dados';
        this.dataInicial=new Date(2022,5,15);
        this.dataFinal=new Date(2022,7,16);
    }
    render(){
        return (
            <>
            <div class="form">
                    <div class="controle-form-left">
                        <div class="div-label">
                            <label class="label-trilha" for="cargo_atual">Cargo Atual:</label>
                        </div>
                        <div>
                            <select class="select-form" name="cargo_atual" onChange={e => this.cargoAtual=e.target.options[e.target.value].text}>
                                <option value="0">Engenheiro de Dados</option>
                                <option value="1">Cientista de Dados</option>
                            </select>
                        </div>
                    </div>
                    <div class="controle-form-right">
                        <div class="div-label">
                            <label class="label-trilha" for="objetivo">Objetivo:</label>
                        </div>
                        <div>
                            <select class="select-form" name="objetivo" onChange={e => this.cargoDesejado=e.target.options[e.target.value].text}>
                                <option value="0">Engenheiro de Dados</option>
                                <option value="1">Cientista de Dados</option>
                            </select>
                        </div>
                    </div>
                    <div class="controle-form-left">
                        <div class="div-label">
                            <label class="label-trilha"  for="nivel_atual">Nível Atual:</label>
                        </div>
                        <div>
                            <select class="select-form" name="nivel_atual" onChange={e => this.nivelAtual=e.target.options[e.target.value].text}>
                                <option value="0">Júnior</option>
                                <option value="1">Pleno</option>
                                <option value="2">Sênior</option>
                            </select>
                        </div>
                    </div>
                    <div class="controle-form-right">
                        <div class="div-label">
                            <label class="label-trilha" for="nivel_desejado">Nível Desejado:</label>
                        </div>
                        <div>
                            <select class="select-form" name="nivel_desejado" onChange={e => this.nivelDesejado=e.target.options[e.target.value].text}>
                                <option value="0">Júnior</option>
                                <option value="1">Pleno</option>
                                <option value="2">Sênior</option>
                            </select>
                        </div>
                    </div>
                    <div class="controle-form-left">
                        <div class="div-label">
                            <label class="label-trilha" for="salario_atual">Salário Atual:</label>
                        </div>
                        <div>
                            <input class="number-form"  name="salario_atual" type="number" onChange={e => this.salarioAtual=e.target.value} />
                        </div>
                    </div>
                    <div class="controle-form-right">
                        <div class="div-label">
                            <label class="label-trilha" for="salario_desejado">Salário Desejado:</label>
                        </div>
                        <div>
                            <input class="number-form"  name="salario_desejado" type="number" value={this.salarioDesejado} onChange={e => this.salarioDesejado=e.target.value} />
                        </div>
                    </div>
                    <div class="controle-form-left">
                        <div class="div-label">
                            <label class="label-trilha" for="data_inicial">Data Inicial:</label>
                        </div>
                        <div>
                            <input class="date-form"  name="data_inicial" type="date" onChange={e => this.dataInicial=e.target.value} />
                        </div>
                    </div>
                    <div class="controle-form-right">
                        <div class="div-label">
                            <label class="label-trilha" for="data_final">Data Final:</label>
                        </div>
                        <div>
                            <input class="date-form"  name="data-final" type="date" onChange={e => this.dataFinal=e.target.value} />
                        </div>
                    </div>                      
            </div>
                    <div class="submit-form">
                        <button class="button-form" onClick={e => this.props.handler(e,this.cargoDesejado,this.dataInicial, this.dataFinal)}>Gerar Trilha</button>
                    </div>
            </>
        );
    }
}

class Form extends React.Component{
    constructor(props){
        super(props);
        this.stateTrilha = false;
        this.handler = this.handler.bind(this)
    }
    handler(event,cargoDesejado,dataInicial,dataFinal) {
      event.preventDefault();
      console.log('intervalo 1',dataInicial,dataFinal);
      this.cargoDesejado = cargoDesejado;
      this.dataInicial = dataInicial;
      this.dataFinal = dataFinal;
      console.log(this.cargoDesejado);
      this.stateTrilha = true;

      this.forceUpdate();
    }
    render(){
        return (
            <>
                <Header />
                {this.stateTrilha ? (
                    <Trilha 
                        stateTrilha 
                        cargoDesejado={this.cargoDesejado}
                        dataInicial={this.dataInicial}
                        dataFinal={this.dataFinal}
                    />
                    ): (
                        <FormTrilha handler = {this.handler} />
                    )}
                <Footer />
            </>
        );
    }
};

export default Form;