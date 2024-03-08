import React from 'react'
import { ContenedorBotones, ContenedorHeader, Header, Titulo } from './elements/Header'
import Boton from './elements/Boton'
import { Helmet } from 'react-helmet'
import BotonCerrarCesion from './elements/BotonCerrarCesion'
import { FormularioGasto } from './components/FormularioGasto'


  

export const App = () => {
  return (
    <>
    <Helmet>
			<title>Agregar Gasto</title>
		</Helmet>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar gasto</Titulo>
          <ContenedorBotones>
            <Boton to='/categorias'>Categoria</Boton>
            <Boton to='/lista'>Lista de Gastos</Boton>
            <BotonCerrarCesion/>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>

      <FormularioGasto/>
    </>
  )
}
