
import { BtnRegresar } from '../elements/BtnRegresar'
import { Header, Titulo } from '../elements/Header'
import { Helmet } from 'react-helmet'
import { useAuth } from '../context/AuthContext'

export const ListaDeGastos = () => {
  
  const usuario = useAuth();
  console.log(usuario.usuario)
  
  return (
    <>
      <Helmet>
				<title>Lista de Gastos</title>
			</Helmet>
      <Header>
          <BtnRegresar/>
          <Titulo>Lista de Gastos</Titulo>
      </Header>
    </>
  )
}
