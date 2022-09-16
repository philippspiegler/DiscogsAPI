import { Button } from "react-bootstrap";
import { Form, FormSelect } from "react-bootstrap";
import "./components.css";

function Search({
  handleSearch,
  searchInput,
  fetchedData,
  records,
  handleSelect,
  selected,
}) {
  // console.log('records :>> ', records);
  const removeDuplicates = () => {
    const uniqueValues = records.filter((ele) => ele.country);
    return uniqueValues;
  };
  return (
    <>
      {/* <Form>
        <Form.Group className="m-3" controlId="formBasicEmail">
          <Form.Control
            style={{ backgroundColor: "white" }}
            onChange={(e) => handleSearch(e)}
            type="search"
            placeholder="record or artist"
            value={searchInput}
          />
          <Button variant="success" onClick={fetchedData}>
            Search
          </Button>
        </Form.Group>
      </Form> */}

      <div>
        <Form className="d-flex mt-3" controlId="formBasicEmail">
          <Form.Control
            style={{
              width: "50vw",
              marginLeft: "25vw",
              backgroundColor: "white",
            }}
            type="search"
            placeholder="record or artist"
            className="me-2"
            aria-label="Search"
            onChange={(e) => handleSearch(e)}
            value={searchInput}
          />
          <Button variant="success" onClick={fetchedData}>
            Send
          </Button>
        </Form>
      </div>

      <Form>
        <FormSelect className="select-filter" onChange={(e) => handleSelect(e)}>
          <option value="all">All</option>
          {removeDuplicates().map((ele) => (
            <option value={ele.country}>{ele.country}</option>
          ))}
        </FormSelect>
      </Form>
    </>
  );
}

export default Search;
