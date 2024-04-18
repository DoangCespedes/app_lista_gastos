import { useState } from 'react';
import Boton from '../elements/Boton'
import {Formulario, ContenedorFiltros, ContenedorBoton, InputGrande, Input} from '../elements/ElementosDeFormulario'
import { FaPlus } from "react-icons/fa";
import { SelectCategorias } from './SelectCategorias';
import DatePicker from './DatePicker';
import { getUnixTime } from "date-fns";
import { fromUnixTime } from "date-fns";
import agregarGasto from '../firebase/agregarGasto';
import {useAuth} from '../context/AuthContext'
import { Alerta } from '../elements/Alerta';


export const FormularioGasto = () => {

    const [inputDescripcion, setInputDescripcion] = useState('');
	const [inputCantidad, setInputCantidad] = useState('')
    const [categoria, setCategoria] = useState('hogar')
    const [fecha, setFecha] = useState(new Date())
    const [estadoAlerta, setEstadoAlerta] = useState(false)
    const [alerta, setAlerta] = useState({})

    const {usuario} = useAuth();

    const handleChange = (e) =>{
        if(e.target.name === 'descripcion'){
			setInputDescripcion(e.target.value);
		} else if(e.target.name === 'cantidad'){
			setInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
		}
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let cantidad = parseFloat(inputCantidad).toFixed(2)

        if (inputDescripcion !== '' && inputCantidad !=='') {
            if (cantidad) {
                
                agregarGasto({
                    categoria: categoria,
                    descripcion: inputDescripcion,
                    cantidad: cantidad, 
                    fecha: getUnixTime(fecha),
                    uidUsuario: usuario.uid
                }) 

                .then(() => {
                    setCategoria('hogar')
                    setInputDescripcion('')
                    setInputCantidad('')
                    setFecha(new Date())

                    setEstadoAlerta(true);
                    setAlerta({ tipo: 'exito', mensaje: 'El gasto fue agregado exitosamente'} )
                })

                .catch((error) =>{
                    setEstadoAlerta(true);
                    setAlerta({ tipo: 'error', mensaje: 'Existe un error vuelva a intentarlo'} )
                })
            }else {
                setEstadoAlerta(true);
                setAlerta({ tipo: 'error', mensaje: 'El valor que ingresaste no es el correcto'} )
            }
        } else {
            setEstadoAlerta(true);
            setAlerta({ tipo: 'error', mensaje: 'Por favor rellena todos los campos'} )
        }
    }

  return (
    <Formulario onSubmit={handleSubmit}>
        <ContenedorFiltros>
            <SelectCategorias
                categoria={categoria}
                setCategoria={setCategoria}
            />
            <DatePicker
                fecha={fecha}
                setFecha={setFecha}
            />
        </ContenedorFiltros>

        <div>
            <Input 
                type="text"
                name="descripcion"
                placeholder="Descripción"
                value={inputDescripcion}
                onChange={handleChange}
            />
            <InputGrande 
                type="text"
                name="cantidad"
                placeholder="$0.00"
                value={inputCantidad}
                onChange={handleChange}
            />
        </div>
        <ContenedorBoton>
            <Boton type="submit" as="button" primario conIcono >
                Agregar gasto <FaPlus />
            </Boton>
        </ContenedorBoton>
        <Alerta
            tipo={alerta.tipo}
            mensaje={alerta.mensaje}
            estadoAlerta={estadoAlerta}
            setEstadoAlerta={setEstadoAlerta}
        />
    </Formulario>
    
  )
}
