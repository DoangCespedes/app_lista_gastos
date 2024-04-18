import { useState } from 'react'
import { ContenedorHeader, Header, Titulo} from '../elements/Header'
import Boton from '../elements/Boton'
import { Helmet } from 'react-helmet'
import {ContenedorBoton, Formulario, Input} from '../elements/ElementosDeFormulario'
import  SvgLogin  from '../imagenes/register.jpg'
import { auth } from '../firebase/FirebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom';
import { Alerta } from '../elements/Alerta'
// import styled from 'styled-components';

// const Svg = styled(SvgLogi
//   width: 100%;
//   max-height: 6.25rem;
//   margin-botton:1.25rem;
// 

export const RegistroUsuario = () => {
  const navigate = useNavigate();
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [estadoAlerta, setEstadoAlerta] = useState(false)
  const [alerta, setAlerta] = useState({})

  const handleChange = (e) =>{
      // console.log(e.target.name)
      switch (e.target.name) {
        case 'email':
          setCorreo(e.target.value)
          break;
        case 'password':
          setPassword(e.target.value)
          break;
        case 'password2':
          setPassword2(e.target.value)
          break;
        default:
          break;
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

    if (correo === '' || password === '' || password2 === '') {
      setEstadoAlerta(true)
      setAlerta({
        tipo:'error',
        mensaje:'Por favor rellena todos los datos'
      })
      return
    }

    if (password !== password2) {
      setEstadoAlerta(true)
      setAlerta({
        tipo:'error',
        mensaje:'Las contraseñas no son iguales'
      })
      return
    }

    

    try {
      await createUserWithEmailAndPassword(auth, correo, password);
      console.log('se registro el usuario')
      navigate('/');
    } catch(error){
      setEstadoAlerta(true)
      let mensaje;
			switch(error.code){
				case 'auth/weak-password':
					mensaje = 'La contraseña tiene que ser de al menos 6 caracteres.'
					break;
				case 'auth/email-already-in-use':
					mensaje = 'Ya existe una cuenta con el correo electrónico proporcionado.'
				break;
				case 'auth/invalid-email':
					mensaje = 'El correo electrónico no es válido.'
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
				<title>Registro de usuario</title>
			</Helmet>

      <Header>
        <ContenedorHeader>
          <Titulo>Crear cuenta</Titulo>
          <div>
            <Boton to='/iniciar-sesion'>Iniciar sesion</Boton>
          </div>
        </ContenedorHeader>
      </Header>
      <Formulario onSubmit={handleSubmit}>
        <div style={{width: '100%', display:'flex', justifyContent:'center'}}>
          <img src={SvgLogin}/>
        </div>
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
        <Input
          type='password'
          name='password2'
          placeholder='Repetir Contraseña'
          value={password2}
          onChange={handleChange}
        />
        <ContenedorBoton>
          <Boton as='button' primario type='submit'>Crear cuenta</Boton>
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
