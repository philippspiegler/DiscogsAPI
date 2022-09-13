import {useState, createContext} from 'react'
import {auth} from '../config.js'
import {createUserWithEmailAndPassword} from 'firebase/auth'

//create context/store

export const AuthContext = createContext()

//create provider

export const AuthContextProvider = (props) => {
    const [user, setUser] = useState(null)
    
    const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in (creates new user with above credentials)
    const user = userCredential.user;
    console.log('user in AuthContext :>> ', user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error in AuthContext :>> ', error);
    // ..
  });
    }

    return (
    <AuthContext.Provider value={{user, setUser, registerNewUser}}>
        {props.children}
    </AuthContext.Provider>
    )
}