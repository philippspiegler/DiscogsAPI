import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import MyCard from '../components/MyCard'


function Display({ props }) {
  console.log("props :>> ", props);
  return (
    <Container>
      <Row>
        {props &&
          props.map((ele, i) => {
            return <MyCard ele={ele} key={i} />;
          })}
      </Row>
    </Container>
  );
}

export default Display;
