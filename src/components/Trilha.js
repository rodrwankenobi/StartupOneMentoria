import './styles/Trilha.css'
import { Chart } from "react-google-charts";
import React from 'react'
import rows_cientista_dados from '../data/cientista_dados'
import rows_engenheiro_dados from '../data/engenheiro_dados'

const columns = [
    { type: "string", id: "Área"},
    { type: "string", id: "Curso" },
    { type: "date", id: "Início" },
    { type: "date", id: "Fim" },
    { type: "string", role: "tooltip" }
  ];

  
class Trilha extends React.Component{
    constructor(props){
        super(props);
        this.props.cargoDesejado == 'Cientista de Dados' ? (this.rows = rows_cientista_dados) : (this.rows = rows_engenheiro_dados);
        this.preencherDatas();
        this.data = [columns, ...this.rows];
    }
    
    preencherDatas(){
        console.log('data inicial: ',this.props.dataInicial,'data final: ',this.props.dataFinal);
        const datas = this.splitDateIntoEqualIntervals(this.props.dataInicial,this.props.dataFinal,this.rows.length);
        datas.unshift(this.props.dataInicial);
        console.log('datas:',datas);
        for (var i = 0; i < this.rows.length; i++) {
            this.rows[i][2] = datas[i];
            console.log(datas[i]);
            this.rows[i][3] = datas[i+1];
            console.log(datas[i+1]);
            console.log(this.rows);
        }
    }
    splitDateIntoEqualIntervals(startDate, endData, numberOfIntervals){
        let diff =  endData.getTime() - startDate.getTime();
        let intervalLength = diff/numberOfIntervals;
        let intervals = [];
        for(let i = 1 ; i <= numberOfIntervals;i++)
          intervals.push(new Date(startDate.getTime()+i*intervalLength))
        return intervals;
       
    }
    
    render(){
        return (
        <>
            <div class="tela-trilha">
                <div class="trilha">
                    <h3>Esta será a sua Jornada para {this.props.cargoDesejado}:</h3>
                    <Chart chartType="Timeline" data={this.data} width="100%"/>
                </div>
            </div>
        </>
        );
    }

};

export default Trilha;