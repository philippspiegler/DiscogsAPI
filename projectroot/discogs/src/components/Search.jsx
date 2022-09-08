import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import {Row, Col }from 'react-bootstrap'
import './components.css'

function Search({ handleSearch, searchInput, fetchedData, records }) {
    
     


    return (
        <>
        <Form>
            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Control className='searchInput' onChange={e => handleSearch(e)} type='search' placeholder='record or artist' value={searchInput} />
                <Button className='searchButton' onClick={fetchedData}>Search</Button>
            </Form.Group>
        </Form>
      </>
    )
}

export default Search


           
              

