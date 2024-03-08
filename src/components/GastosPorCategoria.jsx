import React from 'react'
import { Header, Titulo } from '../elements/Header'
import { BtnRegresar } from '../elements/BtnRegresar'
import { Helmet } from 'react-helmet'

export const GastosPorCategoria = () => {
  return (
    <>

      <Helmet>
				<title>Gastos por Categoría</title>
			</Helmet>
      <Header>
          <BtnRegresar/>
          <Titulo>Gastos Por Categoria</Titulo>
      </Header>
    </>
  )
}
