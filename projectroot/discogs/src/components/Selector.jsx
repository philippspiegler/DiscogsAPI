import React, {useState, useEffect} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Form, FormSelect} from 'react-bootstrap'


function Selector() {
    
    const location = useLocation()
    console.log('location DEEDS', location)
    const ele = location.state

    const [country, setCountry] = useState('')

    
    return (
    <Form>
      <FormSelect></FormSelect>
    </Form>
  )
}

export default Selector