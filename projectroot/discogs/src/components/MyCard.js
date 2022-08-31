import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
function MyCard({ ele }) {
  return (
    <Col xs={12} sm={4}>
      <Card>
        <img src={ele.cover_image} alt="cover" />

        <h3>{ele.genre}</h3>
        <p>{ele.title}</p>
        {ele.country ? <p>{ele.country}</p> : <p>No country info</p>}
        <p>{ele.year}</p>
      </Card>
    </Col>
  );
}

export default MyCard;
