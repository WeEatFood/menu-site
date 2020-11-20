import React, { useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import "../scss/booking.scss"

function Booking () {
  const [modalShow, setModalShow] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div className="booking__container">
      <div>
        <BookingForm/>
      </div>
      <DatePicker
        selected={ startDate }
        onChange={ date => setStartDate(date) }
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={ 15 }
        timeCaption="time"
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      <>
        <ReactBootStrap.Button variant="primary"
                               onClick={ () => setModalShow(true) }>
          Launch vertically centered modal
        </ReactBootStrap.Button>

        <MyVerticallyCenteredModal
          show={ modalShow }
          onHide={ () => setModalShow(false) }
        />
      </>
    </div>
  )
}

export default Booking

function MyVerticallyCenteredModal (props) {
  return (
    <ReactBootStrap.Modal
      { ...props }
      size="sm"
      variant="outlined"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ReactBootStrap.Modal.Header closeButton>
        <ReactBootStrap.Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </ReactBootStrap.Modal.Title>
      </ReactBootStrap.Modal.Header>
      <ReactBootStrap.Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </ReactBootStrap.Modal.Body>
      <ReactBootStrap.Modal.Footer>
        <ReactBootStrap.Button
          onClick={ props.onHide }>Close</ReactBootStrap.Button>
      </ReactBootStrap.Modal.Footer>
    </ReactBootStrap.Modal>
  )
}

function BookingForm () {
  return (
    <ReactBootStrap.Form>
      <ReactBootStrap.Form.Group controlId="exampleForm.ControlInput1">
        <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control type="email"
                                     placeholder="name@example.com"/>
      </ReactBootStrap.Form.Group>
      <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect1">
        <ReactBootStrap.Form.Label>Example select</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control as="select">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </ReactBootStrap.Form.Control>
      </ReactBootStrap.Form.Group>
      <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect2">
        <ReactBootStrap.Form.Label>Example multiple
          select</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control as="select" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </ReactBootStrap.Form.Control>
      </ReactBootStrap.Form.Group>
      <ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
        <ReactBootStrap.Form.Label>Example textarea</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control as="textarea" rows={ 3 }/>
      </ReactBootStrap.Form.Group>
    </ReactBootStrap.Form>
  )
}
