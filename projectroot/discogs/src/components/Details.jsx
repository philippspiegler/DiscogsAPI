import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import './components.css'

function Details () {
const location = useLocation()
console.log('location :>> ', location);
const ele = location.state
return (
    <>
    <div> 
        {ele.title && <h2>{ele.title}</h2>}
    {ele.genre ? <p>Genre: <b>{ele.genre}</b></p> : <p>no genre info</p>}
    {ele.format ? <p>Format: <b>{ele.format[0]}</b></p> : <p>no format info</p>}
    {ele.year  ? <p>Year: <b>{ele.year}</b></p> : <p>no date info</p>}
    {ele.country  ? <p>Country: <b>{ele.country}</b></p> : <p>no country info</p>}
    </div>
    <Link className="link" to="/">Home</Link>
    </>
  )
}

export default Details