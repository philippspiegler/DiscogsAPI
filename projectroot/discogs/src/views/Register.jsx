import React, {useState} from 'react'
import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Container, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './views.css'

const Register = () => {
  const {registerNewUser} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleRegister = () => {
    registerNewUser(email, password)
  }
  
  return (
    <Container className='loginContainer'>
    <h3 className='loginTitle'>Register</h3>
    <Form className='form'>
            <Form.Group className="loginForm">
                <Form.Control className='loginInput' type='text' placeholder='username' value={email} onChange={handleEmailChange}></Form.Control>
                <Form.Control className='loginInput' type='password' placeholder='password' value={password} onChange={handlePasswordChange}></Form.Control>
                <Button className='btn btn-secondary loginButton' onChange={handleRegister}>Register</Button>
            </Form.Group>
        </Form>
    <Link className='homeLink' to="/">Home</Link>
    </Container>
  )
}

export default Register