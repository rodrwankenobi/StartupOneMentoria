import './styles/Trilha.css'
import Header from "./Header"
import Footer from "./Footer"
import { Chart } from "react-google-charts";
import { useState } from 'react';
import rows_cientista_dados from '../data/cientista_dados'

const columns = [
    { type: "string", id: "Área"},
    { type: "string", id: "Curso" },
    { type: "date", id: "Início" },
    { type: "date", id: "Fim" },
    { type: "string", role: "tooltip" }
  ];

const rows = rows_cientista_dados;

export const data = [columns, ...rows];

const Trilha = (props) => {
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