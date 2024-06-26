import React from 'react'
import { useAuth } from '../context/AuthContext'
import { Navigate } from 'react-router'

const RutaPrivada = ({children}) => {
    const {usuario} = useAuth()
    
    if(usuario) {
        return children
    }else {
        return <Navigate replace to="/iniciar-sesion" />
    }
  
}

export default RutaPrivada