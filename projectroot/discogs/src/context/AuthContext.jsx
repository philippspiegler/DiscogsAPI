import { useState, useEffect, createContext } from "react";
import { auth } from "../config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

//create context/store

export const AuthContext = createContext();

//create provider

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const redirect = useNavigate();
  // const redirect = useNavigate();
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in (creates new user with above credentials)
        const user = userCredential.user;
        console.log("user in AuthContext Register :>> ", user);
        redirect("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error in AuthContext Register :>> ", error);
      });
  };

  const logIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user in AuthContext Login :>> ", user);
        setUser(user);
        redirect("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error in AuthContext Login :>>", error);
        // ..
      });
  };
  const checkIfUserIsLoggedIn = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log("user if logged in", user);
        setUser(user);
        setLoading(false);
        // redirect("/", { replace: true });
        // ...
      } else {
        setUser(null);
        setLoading(false);
        // User is signed out
        // ...
      }
    });
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
        console.log("error in AuthContext logout :>> ", error);
      });
  };

  useEffect(() => {
    checkIfUserIsLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, setUser, registerNewUser, logIn, logout, loading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
