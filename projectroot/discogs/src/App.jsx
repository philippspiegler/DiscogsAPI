import React from "react";
import "./App.css";
import Fetch from "./Fetch";
import Header from "./components/Header";

import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Display from "./views/Display";
import Login from "./views/Login";
import Register from "./views/Register";
import Details from "./components/Details";
import Chat from "./views/Chat";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/display" element={<Display />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/details/:item" element={<Details />}></Route>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="*" element={<p>There's nothing here!</p>} />
            <Route path="/redirect" element={<Navigate to="/" />}></Route>
          </Routes>
        </AuthContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
