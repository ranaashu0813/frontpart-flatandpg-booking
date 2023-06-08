import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";


import "react-datepicker/dist/react-datepicker.css";

function ReserveModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [FormData, setFormData] = useState({
    FullName: "",
    Phone: "",
    Email: "",
  });

  const handleSubmit = () => {
    console.log(FormData);
  
    const data={
      FullName:FormData.FullName,
        Phone:FormData.Phone,
        Email:FormData.Email
    }
   setShow(false)

   axios.post("http://localhost:1234/pg/reserveform2",data)
   .then((result)=>{
    console.log(result);
  }).catch((err)=>{
  
    console.log(err);
  })
    
  };

  

  return (
    <>
      <Button className="mb-2 w-100 " variant="dark" onClick={handleShow}>
        Reserve Now
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reserve now</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{border:"1px dotted black"}}>
          <ul>
            <li style={{fontSize:"small"}}>
            If you like a residence or apartment, fill your details
              Our team will shortly connect with you for the further procedure.
            </li>

          </ul>
        </div>
          <Form>
            <Form.Group className="mb-3" controlId="Input1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
              value={FormData.FullName}
                type="text"
                autoFocus
                onChange={(e) =>
                  setFormData({ ...FormData, FullName: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Input2">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
              value={FormData.Phone}
                type="tel"
                onChange={(e) =>
                  setFormData({ ...FormData, Phone: e.target.value })
                }
              />
            </Form.Group>
            
            
            <Form.Group className="mb-3" controlId="Input3">
              <Form.Label>Email</Form.Label>
              <Form.Control
              value={FormData.Email}
                type="email"
                onChange={(e) =>
                  setFormData({ ...FormData, Email: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-dark" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ReserveModal;
