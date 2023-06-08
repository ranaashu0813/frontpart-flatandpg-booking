import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

function ScheduleModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const [FormData, setFormData] = useState({
    FullName: "",
    Phone: "",
    Radio: "",
    Date: new Date(),
    Email: "",
  });

  const handleSubmit = () => {
    console.log(FormData);

    const data={
      FullName:FormData.FullName,
        Phone:FormData.Phone,
        Radio:FormData.Radio,
        Date1:FormData.Date,
        Email:FormData.Email
    }
    console.log(data);
   setShow(false)
   axios.post("http://localhost:1234/pg/scheduleform",data)
   .then((result)=>{
    console.log(result);
  }).catch((err)=>{
  
    console.log(err);
  })
  };

  

  return (
    <>
      <Button className="mb-2 w-100 " variant="dark" onClick={handleShow}>
      Schedule a Visit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Schedule a Visit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <Form.Group className="mb-3" controlId="radioInput">
              <h5>{props.title}</h5>
              <Form.Check
                inline
                label="working profressional"
                name="group1"
                type="radio"
                id="inline-radio-1"
                value="Working"
                onChange={(e) =>
                  setFormData({ ...FormData, Radio: e.target.value })
                }
              />
              <Form.Check
                inline
                label="student"
                name="group1"
                type="radio"
                value="student"
                id="inline-radio-2"
                onChange={(e) =>
                  setFormData({ ...FormData, Radio: e.target.value })
                }
              />
            </Form.Group>
            <div className="mb-3">
              <h6>Visit Date</h6>
              <DatePicker  selected={FormData.Date} onChange={(date) => setFormData({...FormData,Date:date})}  />
              
            </div>

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

export default ScheduleModal;
