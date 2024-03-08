import Boton from "./Boton"
import { LuLogOut } from "react-icons/lu";
import { auth } from "../firebase/FirebaseConfig"
import {signOut} from 'firebase/auth'
import { useNavigate } from "react-router";



const BotonCerrarCesion = () => {

  const navigate = useNavigate()

  const cerrarSesion = async() => {
    try {
      await signOut(auth)
      navigate('/iniciar-sesion')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Boton iconoGrande as="button" onClick={cerrarSesion}>
      <LuLogOut />
    </Boton>
  )
}

export default BotonCerrarCesion