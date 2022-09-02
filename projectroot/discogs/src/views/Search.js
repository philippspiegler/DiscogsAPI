import React, { useState, useEffect } from 'react'
import { Button, FormControl } from '@mui/material'
import Form from 'react-bootstrap/Form'
import './views.css'

function Search({ handleSearch, searchInput, fetchedData }) {

    

    

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control onChange={e => handleSearch(e)} type="search" placeholder="search record or artist" value={searchInput} />
                <Button onClick={fetchedData}>Search</Button>
            </Form.Group>
        </Form>


    )
}

export default Search



