import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card'
function MyCard({ele}) {
  return (
  
    <Card >
      {/* <Card xs={12} sm={6} md={4} lg={3}> */}
      
        <img src={ele.cover_image} alt='cover'></img>
        <h3>{ele.genre}</h3>
        <p>{ele.title}</p>
        {ele.country ? <p>{ele.country}</p> : <p>No country info</p>}
        <p>{ele.year}</p>
      
    </Card>

  )
}

export default MyCard