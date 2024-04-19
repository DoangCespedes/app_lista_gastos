
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
import { IconoCategoria } from '../elements/IconoCategoria'
import ConvertirAMoneda from  '../funciones/ConvertirAMoneda'
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom'
import Boton from '../elements/Boton'
import { format, fromUnixTime } from 'date-fns'
import {es} from 'date-fns/locale'

export const ListaDeGastos = () => {
  
  const gastos = useObtenerGastos()
  
  const formatearFecha = (fecha) =>{
    return format(fromUnixTime(fecha) , `dd 'de' MMMM 'de' yyyy`, {locale: es})
  }

  const fechaEsIgual = (gastos, index, gasto) => {
    if (index !== 0) {
      const fechaActual = formatearFecha(gasto.fecha);
      // const fechaGastoAnterior = formatearFecha(gastos[index -1].fecha);

      console.log(fechaActual , "FECHAS")
    }
  }
  
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
        {gastos[0].map((gasto, index) =>{
          return(
            <div key={gasto.id}>
              {!fechaEsIgual(gastos, index, gasto ) &&
                <Fecha>{formatearFecha(gasto.fecha)}</Fecha>
              }
              <ElementoLista key={gasto.id}>
                <Categoria>
                  <IconoCategoria id={gasto.categoria}/>
                  {gasto.categoria}
                </Categoria>

                <Descripcion>
                  {gasto.descripcion}
                </Descripcion>

                <Valor>{ConvertirAMoneda(gasto.cantidad)}</Valor>

                <ContenedorBotones>
                  <BotonAccion as={Link} to={`/editar/${gasto.id}`}>
                    <MdEdit/>
                  </BotonAccion>
                  <BotonAccion>
                    <AiFillDelete/>
                  </BotonAccion>
                </ContenedorBotones>
              </ElementoLista>
            </div>
          )
        })}

          <ContenedorBotonCentral>
            <BotonCargarMas>Cargar Mas</BotonCargarMas>
          </ContenedorBotonCentral>

          {gastos.length === 0 &&
            <ContenedorSubtitulo>
              <Subtitulo>No hay gasto por los mostar</Subtitulo>
              <Boton as={Link} to={'/'}>Agregar gasto</Boton>
            </ContenedorSubtitulo>
          }



      </Lista>

      <BarraTotalGastado/>
    </>
  )
}
