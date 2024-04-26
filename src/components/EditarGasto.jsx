import React from 'react'
import { Header, Titulo } from '../elements/Header'
import { BtnRegresar } from '../elements/BtnRegresar'
import { Helmet } from 'react-helmet'
import BarraTotalGastado from './BarraTotalGastado'
import {FormularioGasto} from './FormularioGasto'
import { useParams } from 'react-router'
import useObtenerGasto from '../hooks/useObtenerGasto'


export const EditarGasto = () => {
  const {id} = useParams();
  const [gasto] = useObtenerGasto(id);


  console.log(gasto , "useObtenerGasto")
  return (
    <>
      <Helmet>
				<title>EditarGasto</title>
			</Helmet>
      <Header>
          <BtnRegresar ruta="/lista"/>
          <Titulo>EditarGasto</Titulo>
      </Header>

      <FormularioGasto gasto={gasto}/>

      <BarraTotalGastado/>
    </>
  )
}
