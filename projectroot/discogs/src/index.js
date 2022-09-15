import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./views/Login";
import Display from "./views/Display";
import Details from "./components/Details";
import Register from "./views/Register";
import Chat from "./views/Chat";
import { AuthContextProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<App />}></Route>
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
    </BrowserRouter>
  </React.StrictMode>
);
