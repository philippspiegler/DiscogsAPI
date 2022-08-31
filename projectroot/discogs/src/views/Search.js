import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Search({props}) {

    //filter function
    const [search, setSearch] = useState('')
    
  
    return (
        <Form>
            {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control value={search} type="search" placeholder="your favorite artist" />
            </Form.Group>
            <Button onChange>Search</Button> */}
        </Form>
    )
}

export default Search