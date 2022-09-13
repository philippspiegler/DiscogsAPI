import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Link, useNavigate} from "react-router-dom"
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import './components.css'

const Header = () => {
  const {user, setUser, logout} = useContext(AuthContext)
  const redirect = useNavigate()
  const handleLogout = () => {
    logout()
  }
  return (
    <>
    <Navbar> <div className='navbar'>Records API</div>
    <Link className='link' to='/login'>Login</Link>
    <Link className='link' to='/register'>Register</Link>
    {user && <p>Welcome {user.email}</p>}
    <button onClick={handleLogout}>Log out</button>
    </Navbar>
    </>
  )
}

export default Header