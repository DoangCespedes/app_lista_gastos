 
import React, {useContext, useEffect, useState} from 'react';
import {auth} from '../firebase/FirebaseConfig';
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

const useAuth = () => {
  return useContext(AuthContext)
}
const AuthProvider = ({children}) => {

  const [usuario, setUsuario] = useState()
  const [cargandoUsuario, setCargandoUsuario] = useState(true)

  useEffect(() => {
    
  
    const cancelarSuscripcion = onAuthStateChanged(auth, (usuario) => {
      console.log(usuario)
      setUsuario(usuario)
      setCargandoUsuario(false)
    })

    return cancelarSuscripcion;
	}, []);
  
  
  
  return (
    <AuthContext.Provider value={{usuario: usuario}}>
        {!cargandoUsuario && children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext, useAuth };
