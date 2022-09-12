import { Button } from 'react-bootstrap'
import {Form, FormSelect} from 'react-bootstrap'
import './components.css'

function Search({ handleSearch, searchInput, fetchedData, records, handleSelect, selected}) { 
  // console.log('records :>> ', records);

    return (
        <>
        <Form>
            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Control className='searchInput' onChange={e => handleSearch(e)} type='search' placeholder='record or artist' value={searchInput} />
                <Button className='searchButton' onClick={fetchedData}>Search</Button>
            </Form.Group>
        </Form> 
      
        <Form>
          <FormSelect className='select-filter' onChange={e => handleSelect(e)} >
            {/* <option>country:</option> */}
            
            <option value={selected}>  {records.map(ele => {
              // console.log(ele.country)
              let land = ele.country
              return land
            })}</option>
          </FormSelect>
        </Form>
      </>
    )
}

export default Search


           
              

