import React, { useEffect } from 'react'
import {Link, useLocation} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import './components.css'

function Details () {

const location = useLocation()
console.log('location Details :>> ', location);
const ele = location.state
return (
    <>
    <div className="div-details"> 
    {ele.title && <h2 className="h2-details">{ele.title}</h2>}
    {ele.label ? <p>Label: <b>{ele.label[0]}</b></p> : <p>no label info</p>}
    {ele.style ? <p>Style: <b>{ele.style[0]}</b></p> : <p>no style info</p>}
    {ele.master_id  ? <p>Master ID: <b>{ele.master_id}</b></p> : <p>no id info</p>}
    <Button className="btn button-link-details"><Link className="link-details" to="/">Home</Link></Button>
    </div>
    </>
  )
}

export default Details