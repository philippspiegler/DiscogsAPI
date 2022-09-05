import React from 'react'
import { Button, FormControl } from '@mui/material'
import Form from 'react-bootstrap/Form'
import './components.css'

function Search({ handleSearch, searchInput, fetchedData }) {

     return (
        <Form>
            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Control className='searchInput' onChange={e => handleSearch(e)} type='search' placeholder='record or artist' value={searchInput} />
                <Button className='searchButton' onClick={fetchedData}>Search</Button>
            </Form.Group>
        </Form>


    )
}

export default Search


           
              

