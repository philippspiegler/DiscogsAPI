import React from "react"
import Col from "react-bootstrap/esm/Col"
import Card from "react-bootstrap/Card"
import MyModal from "./MyModal"
import Details from "./Details"
import {Link} from "react-router-dom"

function MyCard({ ele }) {

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className='mb-3' style={{backgroundColor: 'lightgray'}}>
        <img src={ele.cover_image} alt="cover"></img>
        {ele.title ? <p>{ele.title}</p> : <p>No title info</p>}
       <MyModal ele={ele}></MyModal>
       {/* <Details ele={ele}></Details> */}
       <Link className="link" to={`/details/${ele.title}`} state={ele}>Even More Info</Link>
      </Card>
    </Col>
  );
}

export default MyCard
