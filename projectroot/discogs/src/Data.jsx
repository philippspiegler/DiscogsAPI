import React, { useState, useEffect } from "react"
import Display from "./views/Display"
import Search from "./views/Search"
import Header from "./views/Header"

function Data() {
  const [records, setRecords] = useState([])
  const [searchInput, setSearchInput] = useState("nirvana")
  const url = `https://api.discogs.com/database/search?q=${searchInput}&token=hDhYBDtJlXtHOWWJPjfSpwYKCHAJjlkHBJOxHlkf`;
  console.log(console.log('records in Data :>> ', records))

  const handleSearch = (e) => {
    console.log('e.target.value :>> ', e.target.value);
    setSearchInput(e.target.value)
  }
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

  useEffect(() => {
    fetchedData(url)
  }, [])


  return (
    <div>
      <Header />
      <Search handleSearch={handleSearch} searchInput={searchInput} fetchedData={fetchedData} />
      <Display props={records} />
    </div>
  );
}

export default Data;
