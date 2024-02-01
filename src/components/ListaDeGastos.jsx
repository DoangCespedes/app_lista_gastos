import React from 'react'
import { BtnRegresar } from '../elements/BtnRegresar'
import { Header, Titulo } from '../elements/Header'

export const ListaDeGastos = () => {
  return (
    <Header>
          <BtnRegresar/>
          <Titulo>Lista de Gastos</Titulo>
      </Header>
  )
}
