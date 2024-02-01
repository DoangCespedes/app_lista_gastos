import {Route, Routes} from 'react-router-dom'
import { EditarGasto, GastosPorCategoria, InicioSesion, ListaDeGastos, RegistroUsuario } from '../components'
import { App } from '../App'
// import { MarvelPage, DCPages, HeroesRoutes} from '../heroes'
// import { Login } from '../auth/pages/Login'

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="iniciar-sesion" element={<InicioSesion/>} />
        <Route path="crear-cuenta" element={<RegistroUsuario/>} />
        <Route path="categorias" element={<GastosPorCategoria/>} />
        <Route path="lista" element={<ListaDeGastos/>} />
        <Route path="editar/:id" element={<EditarGasto/>} />
        <Route path="/" element={<App/>} />
      </Routes>
    </>
  )
}