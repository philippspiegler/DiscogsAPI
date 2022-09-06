import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './components.css'



function MyModal({ele}) {
  
  const [show, setShow] = useState(false)
  
  const handleClose = () => {setShow(false)}
  const handleShow = () => {setShow(true)}
  
    return (
      <>
      <Button className='modalButton' variant="primary" onClick={handleShow}>
        More info
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{backgroundColor: 'rgb(160, 112, 167)'}} closeButton>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: 'lightgray'}}>
          {ele.genre ? <p>Genre: <b>{ele.genre}</b></p> : <p>no genre info</p>}
          {ele.format ? <p>Format: <b>{ele.format[0]}</b></p> : <p>no format info</p>}
          {ele.year  ? <p>Year: <b>{ele.year}</b></p> : <p>no date info</p>}
          {ele.country  ? <p>Country: <b>{ele.country}</b></p> : <p>no country info</p>}
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default MyModal