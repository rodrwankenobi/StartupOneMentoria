import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import React from 'react';
import './App.css';
import MainRoutes from './routes';
import {AuthProvider} from './providers/auth'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (

          <div class="container">
            <MainRoutes />
          </div>

      );
  }
}

export default App;