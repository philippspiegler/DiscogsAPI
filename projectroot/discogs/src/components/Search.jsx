import { Button } from "react-bootstrap"
import { Form, FormSelect } from "react-bootstrap"
import "./components.css"

function Search({
  handleSearch,
  searchInput,
  fetchedData,
  records,
  handleSelect,
  selected,
}) {
  // console.log('records :>> ', records);
  const filterByCountry = () => {
    const rec = records.filter((records) =>
      records.title.includes({ searchInput })
    )
  }

  const removeDuplicates = () => {
    const uniqueValues = records.filter((ele) => ele.country)
    return uniqueValues
  }

  return (
    <>
      <div>
        <Form className="d-flex mt-3" controlId="formBasicEmail">
          <Form.Control
            style={{
              width: "50vw",
              marginLeft: "25vw",
              backgroundColor: "white",
              border: "2px solid lightslategray",
            }}
            type="search"
            placeholder="record or artist"
            className="me-2"
            aria-label="Search"
            onChange={(e) => handleSearch(e)}
            value={searchInput}
          />
          <Button variant="success" onClick={fetchedData}>
            Search
          </Button>
        </Form>
      </div>

      {/* <Form>
        <FormSelect className="select-filter" onChange={(e) => handleSelect(e)}>
          <option value={searchInput}>{filterByCountry}</option>
        </FormSelect>
      </Form> */}
    </>
  )
}

export default Search
