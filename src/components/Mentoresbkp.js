import DataGrid from 'react-data-grid';
import './styles/Mentores.css'
import Header from './Header'
import Footer from './Footer'

import rodrigo from '../../public/img/rodrigo.jpg'
import gabriele from '../../public/img/gabriele.jpg'
import marco from '../../public/img/marco.jpg'
import ericsson from '../../public/img/ericsson.jpg'

const columns = [
  { key: 'nome', name: 'Nome' },
  { key: 'empresa', name: 'Empresa' },
  { key: 'cargo', name: 'Cargo' },
  { key: 'email', name: 'E-mail' },
];

const nome = (text,imageName) => {
    return(
        <div class='mentor'>
            <div>
                <img class='mentor-icon' src={imageName}></img>
            </div>
            <div>
                <span>   {text}</span>
            </div>
        </div>
    )
}
const rows = [
    {nome: nome('Rodrigo Ferreira',rodrigo), empresa: 'Itaú Unibanco', cargo: 'Engenheiro de Dados', email: 'rdg8268@gmail.com'},
    {nome: nome('Gabriele Piras',gabriele), empresa: 'Accenture', cargo: 'Consultor', email: 'gabriele.piras@gmail.com'},
    {nome: nome('Ericsson Araújo',ericsson), empresa: 'BRQ Sistemas', cargo: 'Analista de Sistemas', email: 'ericsson.araujo@gmail.com'},
    {nome: nome('Marco Mendes',marco), empresa: 'Ageo Terminais', cargo: 'Coordenador', email: 'marco.mendes@gmail.com'}
];

function Mentores() {
  return (
    <>
        <div class="mentores">
            <Header/>
            <DataGrid columns={columns} rows={rows} />
            <Footer />
        </div>
    </>
  );
}

export default Mentores;