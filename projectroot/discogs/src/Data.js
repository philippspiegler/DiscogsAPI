import React, { useState, useEffect } from 'react'
import Display from './views/Display'
import Search from './views/Search'



function Data() {

  const [records, setRecords] = useState([])
  const url = `https://api.discogs.com/database/search?q=Nirvana&token=hDhYBDtJlXtHOWWJPjfSpwYKCHAJjlkHBJOxHlkf`
  const fetchedData = () => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setRecords(data.results)
      })
  }

  useEffect(() => {
    fetchedData(url)
  }, [])


  const searchInput = () => {
    records.map()
  }

  return (
    <div>
      <Display records={records} />
      <Search records={records}/>
    </div>
  )
}

export default Data



