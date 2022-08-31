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



  return (
    <div>
      <Display props={records} />
      <Search props={records}/>
    </div>
  )
}

export default Data




