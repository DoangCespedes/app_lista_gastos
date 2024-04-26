import {useEffect, useState} from 'react';
import {db} from '../firebase/firebaseConfig';
import {useNavigate} from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore';

const useObtenerGasto = (id) => {
	const navigate = useNavigate();
	const [gasto, establecerGasto] = useState('');

	
	
	useEffect(() => {
		const obtenerGasto = async() => {
			const documento = await getDoc(doc(db, 'gastos', id));

			// console.log(documento._document.data.value.mapValue.fields, "documento !")

			let newJSON = {
				"cantidad":documento._document.data.value.mapValue.fields.cantidad.integerValue,
				"categoria":documento._document.data.value.mapValue.fields.categoria.stringValue,
				"descripcion":documento._document.data.value.mapValue.fields.descripcion.stringValue,
				"fecha":documento._document.data.value.mapValue.fields.fecha.integerValue,
				"uidUsuario":documento._document.data.value.mapValue.fields.uidUsuario.stringValue,
		
			}
		
			// console.log(newJSON, "newJSON")

			if(documento.exists){
				establecerGasto(newJSON);
			} else {	
				navigate('/lista');
			}
		}

		obtenerGasto();
	}, [navigate, id]);

	return [gasto];
}
 
export default useObtenerGasto;