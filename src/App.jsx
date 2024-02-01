import React from 'react'
import { ContenedorBotones, ContenedorHeader, Header, Titulo } from './elements/Header'
import Boton from './elements/Boton'


  

export const App = () => {
  return (
    <>
      <Header>
        <ContenedorHeader>
          <Titulo>Agregar gasto</Titulo>
          <ContenedorBotones>
            <Boton to='/categorias'>Categoria</Boton>
            <Boton to='/lista'>Lista de Gastos</Boton>
            <Boton>X</Boton>
          </ContenedorBotones>
        </ContenedorHeader>
      </Header>
    </>
  )
}
