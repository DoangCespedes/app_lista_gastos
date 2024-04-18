
import { BtnRegresar } from '../elements/BtnRegresar'
import { Header, Titulo } from '../elements/Header'
import { Helmet } from 'react-helmet'
import {
  Lista,
  ElementoLista,
  ListaDeCategorias,
  ElementoListaCategorias,
  Categoria,
  Descripcion,
  Valor,
  Fecha,
  ContenedorBotones,
  BotonAccion,
  BotonCargarMas,
  ContenedorBotonCentral,
  ContenedorSubtitulo,
  Subtitulo
} from '../elements/ElementosDeLista'

import BarraTotalGastado from './BarraTotalGastado'
import useObtenerGastos from '../hooks/useObtenerGastos'

export const ListaDeGastos = () => {
  
  const gastos = useObtenerGastos()
  console.log(gastos)
  
  return (
    <>
      <Helmet>
				<title>Lista de Gastos</title>
			</Helmet>
      <Header>
          <BtnRegresar/>
          <Titulo>Lista de Gastos</Titulo>
      </Header>

      <Lista>
        {gastos.map((gasto) =>{
          return(
            <ElementoLista key={gasto.id}>
              {gasto.descripcion}
            </ElementoLista>
          )
        })}
      </Lista>

      <BarraTotalGastado/>
    </>
  )
}
