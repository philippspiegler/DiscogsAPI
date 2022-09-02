import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
function MyCard({ ele }) {
  return (
    <Col>
      <Card>
        <img src={ele.cover_image} alt="cover"></img>
        <h3>{ele.genre}</h3>
        <p>{ele.title}</p>
        {ele.country ? <p>{ele.country}</p> : <p>No country info</p>}
        <p>{ele.year}</p>
      </Card>
    </Col>
  );
}

export default MyCard;
