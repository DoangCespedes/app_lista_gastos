import React from 'react'
import { ContenedorBotones, ContenedorHeader, Header, Titulo } from '../elements/Header'
import Boton from '../elements/Boton'
import { BtnRegresar } from '../elements/BtnRegresar'

export const GastosPorCategoria = () => {
  return (
    <>
      <Header>
        {/* <ContenedorHeader> */}
          <BtnRegresar/>
          <Titulo>Gastos Por Categoria</Titulo>
          {/* <ContenedorBotones>
            <Boton to='/categorias'>Categoria</Boton>
            <Boton to='/lista'>Lista de Gastos</Boton>
            <Boton>X</Boton>
          </ContenedorBotones> */}
        {/* </ContenedorHeader> */}
      </Header>
    </>
  )
}
