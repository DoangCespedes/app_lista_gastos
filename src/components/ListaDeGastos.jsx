
import { BtnRegresar } from '../elements/BtnRegresar'
import { Header, Titulo } from '../elements/Header'
import { Helmet } from 'react-helmet'
import {
  Lista,
  ElementoLista,
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
import borrarGasto from '../firebase/borrarGasto'

export const ListaDeGastos = () => {
  
  const gastos = useObtenerGastos()
  const obtenerMasGastos = useObtenerGastos()
  const hayMasPorCargar = useObtenerGastos()
  
  const formatearFecha = (fecha) =>{
    return format(fromUnixTime(fecha) , `dd 'de' MMMM 'de' yyyy`, {locale: es})
  }

  console.log(obtenerMasGastos, " obtenerMasGastos ")
  console.log(hayMasPorCargar, " hayMasPorCargar ")
  console.log(gastos, " gastos ")


  const fechaEsIgual = (gastos, index, gasto) => {
    if (index !== 0) {
      const fechaActual = formatearFecha(gasto.fecha);
       const fechaGastoAnterior = formatearFecha(gastos[0][index -1].fecha);
      
       if (fechaActual === fechaGastoAnterior) {
          return true;
       }else {
        return false;
       }
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
                  <BotonAccion onClick={() => borrarGasto(gasto.id)}>
                    <AiFillDelete/>
                  </BotonAccion>
                </ContenedorBotones>
              </ElementoLista>
            </div>
          )
        })}

          { hayMasPorCargar === false &&
            <ContenedorBotonCentral>
            <BotonCargarMas onClick={() => obtenerMasGastos()}>Cargar Mas</BotonCargarMas>
            </ContenedorBotonCentral>
          }

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
