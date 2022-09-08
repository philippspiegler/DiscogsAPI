import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import {Link} from "react-router-dom"
import './components.css'

function Header() {
  return (
    <>
    <Navbar> <div className='navbar'>Records API</div>
    <Link className='link' to='/login'>Login</Link>
    <Link className='link' to='/register'>Register</Link>
    </Navbar>
    </>
  )
}

export default Header