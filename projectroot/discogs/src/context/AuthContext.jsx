import { ThemeContext } from '@emotion/react'
import React, {useState, createContext, useContext} from 'react'

const AuthContext = createContext()

export function AuthContextProvider(){
    const [loggedIn, setLoggedIn] = useState(false)

 return(
     <AuthContext.Provider value={loggedIn}></AuthContext.Provider>
 )

}