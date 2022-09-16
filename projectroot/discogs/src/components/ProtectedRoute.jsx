import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  //   console.log(",props>>>>", props);
  const { user, loading } = useContext(AuthContext);
  //   const isAuth = user !== null ? true : false;
  console.log("user :>> ", user);
  console.log("loading>>>>", loading);

  return loading ? <p>loading......</p> : user ? children : <Navigate to="/" />;
}

export default ProtectedRoute;
