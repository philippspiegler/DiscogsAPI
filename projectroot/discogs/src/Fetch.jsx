import React, { useState, useEffect } from "react"
import Display from "./views/Display"
import Search from "./components/Search"
import { useTheme, useThemeUpdate } from "./context/ThemeContext"

function Fetch() {
  const [records, setRecords] = useState([])
  const [selected, setSelected] = useState("")
  const [searchInput, setSearchInput] = useState("Violin Concerto")
  const url = `https://api.discogs.com/database/search?q=${searchInput}&token=hDhYBDtJlXtHOWWJPjfSpwYKCHAJjlkHBJOxHlkf`
  console.log(console.log("records in Fetch :>> ", records))

  // fetch
  const fetchedData = async () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setRecords(data.results)
        console.log("results :>> ", data.results)
      })
      .catch((err) => console.log(err))
  }

  //search
  const handleSearch = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSelect = (e) => {
    console.log("e.target.value from handleSelect :>> ", e.target.value)
    setSelected(e.target.value)
  }

  useEffect(() => {
    fetchedData(url)
  }, [])

  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  }

  return (
    <>
      <div style={themeStyles}>
        <Search
          handleSearch={handleSearch}
          searchInput={searchInput}
          fetchedData={fetchedData}
          handleSelect={handleSelect}
          selected={selected}
          records={records}
        />
        <Display records={records} />
      </div>
    </>
  )
}

export default Fetch
