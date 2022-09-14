import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Details from "./components/Details";
import Register from "./views/Register";
import Chat from "./views/Chat";
import { AuthContextProvider } from "./context/AuthContext";
import { db } from "./config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/details/:item" element={<Details />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
          <Route path="*" element={<p>There's nothing here!</p>} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
