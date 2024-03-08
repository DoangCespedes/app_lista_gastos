import { useState } from 'react'
import { ContenedorHeader, Header, Titulo} from '../elements/Header'
import Boton from '../elements/Boton'
import { Helmet } from 'react-helmet'
import {ContenedorBoton, Formulario, Input} from '../elements/ElementosDeFormulario'
import  SvgLogin  from '../imagenes/login'
import { useNavigate } from 'react-router'
import { auth } from '../firebase/FirebaseConfig'
import { signInWithEmailAndPassword } from "firebase/auth";
import { Alerta } from '../elements/Alerta'

export const InicioSesion = () => {

  const navigate = useNavigate();
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [estadoAlerta, setEstadoAlerta] = useState(false)
  const [alerta, setAlerta] = useState({})

  const handleChange = (e) =>{
    if (e.target.name === 'email') {
      setCorreo(e.target.value)
    }else if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  }

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    setEstadoAlerta(false);
    setAlerta({});

    const expresionRegular = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
    // console.log(expresionRegular.test(correo))
    if (!expresionRegular.test(correo)) {
      setEstadoAlerta(true)
      setAlerta({
        tipo:'error',
        mensaje:'Por ingresa un correo electrónico valido'
      })
      return
    }

    if (correo === '' || password === '') {
      setEstadoAlerta(true)
      setAlerta({
        tipo:'error',
        mensaje:'Por favor rellena todos los datos'
      })
      return
    }

    try {
      await signInWithEmailAndPassword(auth, correo, password);
      navigate('/');
    } catch(error){
      
      console.log(error.code)

      setEstadoAlerta(true)
      let mensaje;
			switch(error.code){
				case 'auth/invalid-credential':
					mensaje = 'La contraseña no es correcta.'
					break;
				case 'auth/user-not-found':
					mensaje = 'No se encontro ninguna cuenta con este correo electrónico.'
					break;
				default:
					mensaje = 'Hubo un error al intentar crear la cuenta.'
				break;
			}
      setAlerta({tipo: 'error', mensaje: mensaje})
    }
  }

  return (
    <>
    <Helmet>
      <title>Iniciar Sesion</title>
    </Helmet>

    <Header>
      <ContenedorHeader>
        <Titulo>Iniciar Sesion</Titulo>
        <div>
          <Boton to='/crear-cuenta'>Registrarse</Boton>
        </div>
      </ContenedorHeader>
    </Header>

    <Formulario onSubmit={handleSubmit }>
      <SvgLogin  style={{width: '100%',maxHeight:'6.25rem', marginBotton:'1.25rem' }}/>
      <Input
        type='email'
        name='email'
        placeholder='Correo Electronico'
        value={correo}
        onChange={handleChange}
      />
      <Input
        type='password'
        name='password'
        placeholder='Contraseña'
        value={password}
        onChange={handleChange}
      />
      <ContenedorBoton>
        <Boton as='button' primario type='submit'>Iniciar Sesion</Boton>
      </ContenedorBoton>
    </Formulario>

    <Alerta
        tipo={alerta.tipo}
        mensaje={alerta.mensaje}
        estadoAlerta={estadoAlerta}
        setEstadoAlerta={setEstadoAlerta}
      />
  </>
  )
}
