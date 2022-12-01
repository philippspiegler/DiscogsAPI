import React from "react"
import Navbar from "react-bootstrap/Navbar"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import { Button, FormGroup, FormControlLabel, Switch } from "@mui/material"
import { useTheme, useThemeUpdate } from "../context/ThemeContext"
import "./components.css"
import { NavDropdown } from "react-bootstrap"

const Header = () => {
  const { user, setUser, logout } = useContext(AuthContext)
  const redirect = useNavigate()
  const handleLogout = () => {
    logout()
  }

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#000" : "#333",
  }

  return (
    <>
      <Navbar>
        <Link to="/" className="link">
          <div style={{ color: "#ffbb00" }}>Records API</div>
        </Link>
        <Link className="link" to="/login">
          Login
        </Link>
        <Link className="link" to="/register">
          Register
        </Link>
        {user && (
          <Link className="link" to="/chat">
            Chat
          </Link>
        )}
        {user && <span>Welcome {user.email}</span>}
        {user && (
          <Button
            onClick={handleLogout}
            style={{
              backgroundColor: "#a070a7",
              color: "black",
              border: "0.5px solid white",
            }}
          >
            Log out
          </Button>
        )}
        <FormGroup>
          <FormControlLabel
            onClick={toggleTheme}
            control={<Switch color="default" />}
            label="theme"
          />
        </FormGroup>
      </Navbar>
    </>
  )
}

export default Header
