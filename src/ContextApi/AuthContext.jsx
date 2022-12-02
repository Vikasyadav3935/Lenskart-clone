import React from 'react';
import { createContext,useState } from 'react';


export const AuthContext=createContext();

const AuthProvider = ({children}) => {
  const [isAuth,setisAuth]=useState(false);
  const [register,setRegister]=useState(false);
  return (

    <AuthContext.Provider value={{isAuth,setisAuth,register,setRegister}}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider