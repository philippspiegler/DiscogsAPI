import React from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import { Link } from "react-router-dom"
import './views.css'

function Login(){
    return(  
    <Container className='loginContainer'>
    <h3 className='loginTitle'>Login</h3>
    <Form className='form'>
            <Form.Group className="loginForm">
                <Form.Control className='loginInput' placeholder='login creds'></Form.Control>
                <Button className='btn btn-secondary loginButton'>Login</Button>
            </Form.Group>
        </Form>
    <Link className='homeLink' to="/">Home</Link>
    </Container>
    )
}

export default Login