import React from "react";
import "../App.css";
import Fetch from "../Fetch.jsx";
import Header from "../components/Header";

// import { AuthContextProvider } from "./context/AuthContext";
// import { ThemeProvider } from "./context/ThemeContext";

function Home() {
  return (
    <div className="App">
      <Header />
      <Fetch />
    </div>
  );
}

export default Home;
