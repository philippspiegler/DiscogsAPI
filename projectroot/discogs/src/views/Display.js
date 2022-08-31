import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import MyCard from '../components/MyCard'


function Display({ props }) {
console.log('props :>> ', props);
  return (
    <div>
<Container >
  <Row>
      {props.map((ele, i) => {
        return (
          <Col sm={3} md={2} key={i}>
            
              {/* <Row>
                <Col>
                  <Card xs={12} sm={6} md={4} lg={3}>
                    <img src={ele.cover_image} alt='cover'></img>
                    <h3>{ele.genre}</h3>
                    <p>{ele.title}</p>
                    {ele.country ? <p>{ele.country}</p> : <p>No country info</p>}
                    <p>{ele.year}</p>
                  </Card>
                </Col>
              </Row> */}
               <MyCard ele={ele}/>
          </Col>
        )
      })}
      </Row>
      </Container>
    </div>

  )
}

export default Display

