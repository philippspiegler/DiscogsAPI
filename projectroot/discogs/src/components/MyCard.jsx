import React from "react"
import Col from "react-bootstrap/esm/Col"
import Card from "react-bootstrap/Card"

function MyCard({ ele }) {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className='mb-3' style={{backgroundColor: 'lightgray'}}>
        <img src={ele.cover_image} alt="cover"></img>
        <h3>{ele.genre}</h3>
        {ele.title ? <p>{ele.title}</p> : <p>No title info</p>}
        {ele.format ? <p>{ele.format[0]}</p> : <p>No format info</p>}
        <p>{ele.year}</p>
        <p>record id: {ele.id}</p>
      </Card>
    </Col>
  );
}

export default MyCard;
