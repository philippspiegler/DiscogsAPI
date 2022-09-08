import React from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './views.css'

function Register() {


  return (
    <Container className='loginContainer'>
    <h3 className='loginTitle'>Register</h3>
    <Form className='form'>
            <Form.Group className="loginForm">
                <Form.Control className='loginInput' type='text' placeholder='username'></Form.Control>
                <Form.Control className='loginInput' type='password' placeholder='password'></Form.Control>
                <Button className='btn btn-secondary loginButton'>Register</Button>
            </Form.Group>
        </Form>
    <Link className='homeLink' to="/">Home</Link>
    </Container>
  )
}

export default Register