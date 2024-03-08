import {Route, Routes} from 'react-router-dom'
import { EditarGasto, GastosPorCategoria, InicioSesion, ListaDeGastos, RegistroUsuario } from '../components'
import { App } from '../App'
import RutaPrivada from '../components/RutaPrivada'
// import { MarvelPage, DCPages, HeroesRoutes} from '../heroes'
// import { Login } from '../auth/pages/Login'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="iniciar-sesion" element={<InicioSesion/>} />
        <Route path="crear-cuenta" element={<RegistroUsuario/>} />

        <Route path="/categorias" element={
          <RutaPrivada>
            <GastosPorCategoria/>
          </RutaPrivada>
        }/>

        <Route path="/lista" element={
          <RutaPrivada>
            <ListaDeGastos/>
          </RutaPrivada>
        }/>

        <Route path="/editar/:id" element={
          <RutaPrivada>
            <EditarGasto/>
          </RutaPrivada>
        }/>

        <Route path="/" element={
          <RutaPrivada>
            <App />
          </RutaPrivada>
        } />
        
      </Routes>
    </>
  )
}