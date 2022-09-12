import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import MyCard from '../components/MyCard'
import {useTheme, useThemeUpdate} from '../context/ThemeContext'



function Display({ records }) {
  // console.log("props :>> ", records);

const darkTheme = useTheme()
const toggleTheme = useThemeUpdate()
const themeStyles = {
  backgroundColor: darkTheme ? '#333' : '#CCC',
  color: darkTheme ? '#CCC' : '#333' 
}
  
  return (
  <>
    <button style={{marginBottom: '1em'}} onClick={toggleTheme}>toggle theme</button>
    
    <div style={themeStyles}>
    <Container>
      <Row>
        {records &&
          records.map((ele, i) => {
            return<MyCard ele={ele} key={i} />
            })}
      </Row>
    </Container>
    </div>
  </>
  )
}

export default Display