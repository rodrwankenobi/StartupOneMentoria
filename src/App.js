import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';
import {React} from 'react';
import './App.css';
import MainRoutes from './routes';
import {AuthProvider} from './providers/auth'

export default function App() {
  return (
      <AuthProvider>
        <div class="container">
          <MainRoutes />
        </div>
      </AuthProvider>
    )
}