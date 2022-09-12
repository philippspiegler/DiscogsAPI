import React from "react"
import "./App.css"
import Fetch from "./Fetch"
import Header from "./components/Header"
import {ThemeProvider} from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Fetch />
      </div>
    </ThemeProvider>
    
  )
}

export default App;
