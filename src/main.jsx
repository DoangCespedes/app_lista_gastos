import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import WebFont from 'webfontloader'
import Contenedor from './elements/Contenedor'
import { AppRouter } from './router/AppRouter'
import Fondo from './elements/Fondo'
import { AuthProvider } from './context/AuthContext'
import { TotalGastadoProvider } from './context/TotalGastadoEnElMesContext'

WebFont.load({
  google: {
    families: ['Work Sans:400,500,700', 'sans-serif']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    
    
    <React.StrictMode>

      <AuthProvider>
        <TotalGastadoProvider>
        <BrowserRouter>
          <Contenedor>
            <AppRouter/>
          </Contenedor>
        </BrowserRouter>
        </TotalGastadoProvider>
      </AuthProvider>
      
    <Fondo/>
    </React.StrictMode>,
      
  </>
)
