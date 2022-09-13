import React, {useState} from 'react'
import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'
import {Container, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './views.css'

const Login = () => {
    const {logIn} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
      setPassword(e.target.value)
    }
    const handleLogin = () => {
      logIn(email, password)
    }
    return(  
    <Container className='loginContainer'>
    <h3 className='loginTitle'>Login</h3>
    <Form className='form'>
            <Form.Group className="loginForm">
            <Form.Control className='loginInput' type='email' placeholder='e-mail' value={email} onChange={handleEmailChange}></Form.Control>
                <Form.Control className='loginInput' type='password' placeholder='password' value={password} onChange={handlePasswordChange}></Form.Control>
                <Button className='btn btn-secondary loginButton' onClick={handleLogin}>Login</Button>
            </Form.Group>
        </Form>
        <Form.Label htmlFor="loginLabel" className="loginLink">Not registered yet?</Form.Label>
        <Link className='loginLink' id="loginButton" to="/register">Register</Link>
    <Link className='homeLink' to="/">Home</Link>
    </Container>
    )
}

export default Login