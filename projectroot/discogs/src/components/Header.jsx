import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from "react-router-dom"
import './components.css'

function Header() {
  return (
    <>
    <Navbar className='navbar'>Records API</Navbar>
    <Link className='link navbar' to='/login'>Login</Link>
    </>
  )
}

export default Header