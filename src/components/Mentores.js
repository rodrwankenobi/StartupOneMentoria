import React from 'react';
import DataGrid, {
  Column,
  MasterDetail,
  Selection,
} from 'devextreme-react/data-grid';
import Header from './Header'
import Footer from './Footer'
import { employees } from './data.js';
import './styles/Mentores.css'

class Mentores extends React.Component {
  constructor(props) {
    super(props);
    this.contentReady = this.contentReady.bind(this);
    this.selectionChanged = this.selectionChanged.bind(this);
  }

  render() {
    return (
      <>
      <Header/>
        <div class="grid-mentores">
          <DataGrid
            id="grid-container"
            dataSource={employees}
            keyExpr="ID"
            onSelectionChanged={this.selectionChanged}
            onContentReady={this.contentReady}
            showBorders={true}
          >
            <Selection mode="single" />
            <Column dataField="Nome" width="170"/>
            <Column dataField="Cargo" width="170" />
            <Column dataField="Empresa" width="170" />
            <MasterDetail enabled={false} render={renderDetail} />
          </DataGrid>
        </div>
      <Footer/>
      </>
    );

  }

  contentReady(e) {
    if (!e.component.getSelectedRowKeys().length) { e.component.selectRowsByIndexes(0); }
  }

  selectionChanged(e) {
    e.component.collapseAll(-1);
    e.component.expandRow(e.currentSelectedRowKeys[0]);
  }
}

function renderDetail(props) {
  const { Picture, Notes, Nome } = props.data;
  const solicitarMentoria = (nome) => {
    alert("Sua solicitação de mentoria para ${nome} foi enviada. Por favor aguarde o retorno do mentor.");
  }
  return (
    <div className="employee-info">
        <h3>{Nome}</h3>
      <div class='solicitacao-mentoria'>
        <div class="avatar">
          <img className="employee-photo" src={Picture} />
          <p className="employee-notes">{Notes}</p>
        </div>
        <textarea class='text-solicitar-mentoria' placeholder="Digite uma mensagem"></textarea>
        <button class="btn-solicitar-mentoria">Solicitar Mentoria</button>
      </div>
    </div>
  );
}

export default Mentores;
