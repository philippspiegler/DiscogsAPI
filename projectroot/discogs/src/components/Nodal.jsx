import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import './components.css'



function Nodal({info}) {
  
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
        <Modal.Header closeButton>
          <Modal.Title>title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p></p>
          <Button variant="secondary" onClick={handleClose}>
            Back
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Nodal