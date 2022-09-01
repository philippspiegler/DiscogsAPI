import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Search({records}) {

    //filter function
    const [search, setSearch] = useState('')
    //map thru search input, export to Data
   useEffect(() => {
    setSearch(records)
   }, [])
   
  
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control value={search} onChange={(e) => setSearch.target.value} type="search" placeholder="your favorite artist" />
            </Form.Group>
            <Button>Search</Button>
        </Form>
    )
}

export default Search