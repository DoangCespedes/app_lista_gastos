import { useState } from 'react';
import Boton from '../elements/Boton'
import {Formulario, ContenedorFiltros, ContenedorBoton, InputGrande, Input} from '../elements/ElementosDeFormulario'
import { FaPlus } from "react-icons/fa";
import { SelectCategorias } from './SelectCategorias';
import DatePicker from './DatePicker';
export const FormularioGasto = () => {

    const [inputDescripcion, setInputDescripcion] = useState('');
	const [inputCantidad, setInputCantidad] = useState('')
    const [categoria, setCategoria] = useState('hogar')
    const [fecha, setFecha] = useState(new Date())

    const handleChange = (e) =>{
        if(e.target.name === 'descripcion'){
			setInputDescripcion(e.target.value);
		} else if(e.target.name === 'cantidad'){
			setInputCantidad(e.target.value.replace(/[^0-9.]/g, ''));
		}
    }

  return (
    <Formulario>
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
            <Boton as="button" primario conIcono type="submit">
                Agregar gasto <FaPlus />
            </Boton>
        </ContenedorBoton>
        
    </Formulario>
    
  )
}
