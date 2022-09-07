import React, { useState, useEffect } from "react"
import Display from "./views/Display"
import Search from "./components/Search"



function Data() {
  const [records, setRecords] = useState([])
  const [searchInput, setSearchInput] = useState('Alice Cooper')
  const url = `https://api.discogs.com/database/search?q=${searchInput}&token=hDhYBDtJlXtHOWWJPjfSpwYKCHAJjlkHBJOxHlkf`
  console.log(console.log('records in Data :>> ', records))
  
  // fetch
  const fetchedData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecords(data.results);
        console.log('results :>> ', data.results);
      })
    }
    
  //search
  const handleSearch = (e) => {
  setSearchInput(e.target.value)
  }

  
  useEffect(() => {
    fetchedData(url)
  }, [] )



  return (
    <div>
      <Search handleSearch={handleSearch} searchInput={searchInput} fetchedData={fetchedData} />
      <Display records={records}/>
    </div>
  );
}

export default Data;
