import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DatePick from "../../UI/DatePick";

  function RequestCall() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className="mb-2 " variant="dark" onClick={handleShow}>
          Reserve Now
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reserve now</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="Input1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="Input2">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="tel"
                
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="radioInput">
  
              <h5>I am </h5>
              <Form.Check
              inline
              label="working profressional"
              name="group1"
              type="radio"
              id="inline-radio-1"
            />
            <Form.Check
              inline
              label="student"
              name="group1"
              type="radio"
              id="inline-radio-2"
            />
              </Form.Group>
             <div className="mb-3">
            <h6>Visit Date</h6> 
            <DatePick />
  
             </div>
              
              <Form.Group className="mb-3" controlId="Input3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="outline-dark" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default RequestCall;
