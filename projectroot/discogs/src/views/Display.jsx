import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import MyCard from '../components/MyCard'
import {Link} from 'react-router-dom'

function Display({ records }) {
  // console.log("props :>> ", records);
  return (
    <Container>
      <Row>
        {records &&
          records.map((ele, i) => {
            return<MyCard ele={ele} key={i} />
            
          })}
      </Row>
    </Container>
  );
}

export default Display;
