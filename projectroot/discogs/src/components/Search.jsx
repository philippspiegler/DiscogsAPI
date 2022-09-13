import { Button } from 'react-bootstrap'
import {Form, FormSelect} from 'react-bootstrap'
import './components.css'

function Search({ handleSearch, searchInput, fetchedData, records, handleSelect, selected}) { 
  // console.log('records :>> ', records);
  const removeDuplicates = () => {
    const uniqueValues = records.filter(ele => ele.country)
    return uniqueValues
  }
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
            
            <option value="all">All</option>
            {removeDuplicates().map(ele => (
              <option value={ele.country}>{ele.country}</option>
            ))}
            
          </FormSelect>
        </Form>
      </>
    )
}

export default Search


           
              

