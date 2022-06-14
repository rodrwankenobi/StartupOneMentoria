import './styles/Trilha.css'
import { Chart } from "react-google-charts";
import rows_cientista_dados from '../data/cientista_dados'
import rows_engenheiro_dados from '../data/cientista_dados'

const columns = [
    { type: "string", id: "Área"},
    { type: "string", id: "Curso" },
    { type: "date", id: "Início" },
    { type: "date", id: "Fim" },
    { type: "string", role: "tooltip" }
  ];

  
const Trilha = (props) => {
    (props.cargoDesejado = 'Cientista de Dados') ?
        (rows = rows_cientista_dados) : (rows = rows_engenheiro_dados)
    const data = [columns, ...rows];
    console.log(props);
    return (
    <>
        <div class="tela-trilha">
            <div class="trilha">
                <h3>Esta será a sua Jornada:</h3>
                <Chart chartType="Timeline" data={data} width="100%"/>
            </div>
        </div>
    </>
    );

};

export default Trilha;