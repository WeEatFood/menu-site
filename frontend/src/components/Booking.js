import React, { useState, Fragment } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import Map from './info/Map'
import 'react-datepicker/dist/react-datepicker.css'
import '../scss/booking.scss'

const Booking = () => {
  const [modalShow, setModalShow] = useState(false)
  const [startDate, setStartDate] = useState(new Date())

  return (
    <div className="booking__container">
      <div className="booking__inner-container">
        <Fragment>
          <BookingForm/>
        </Fragment>
        <DatePicker
          selected={ startDate }
          onChange={ date => setStartDate(date) }
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={ 15 }
          timeCaption="time"
          dateFormat="MMMM d, yyyy h:mm aa"
        />
        <div>
          <ReactBootStrap.Button variant="outline"
                                 className="booking__button"
                                 size="sm"
                                 onClick={ () => setModalShow(true) }>
            Book Now
          </ReactBootStrap.Button>
          <MyVerticallyCenteredModal
            show={ modalShow }
            onHide={ () => setModalShow(false) }
          />
        </div>
      </div>
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
          Thank You
        </ReactBootStrap.Modal.Title>
      </ReactBootStrap.Modal.Header>
      <ReactBootStrap.Modal.Body>
        <h4>You reservation has been sent</h4>
        <p>
          Thank you, for choosing Bolder's. We can not wait for you dine with us
          soon! Ask about our daily specials and do not forget happy hour from 4
          to 6 Monday through Thursday.
        </p>
      </ReactBootStrap.Modal.Body>
      <ReactBootStrap.Modal.Footer>
        <ReactBootStrap.Button
          onClick={ props.onHide }
        >Close</ReactBootStrap.Button>
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
        <ReactBootStrap.Form.Label>First Name</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control type="Name"
                                     placeholder="First Name"/>
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
      <ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
        <ReactBootStrap.Form.Label>Example textarea</ReactBootStrap.Form.Label>
        <ReactBootStrap.Form.Control as="textarea" rows={ 3 }/>
      </ReactBootStrap.Form.Group>
    </ReactBootStrap.Form>
  )
}
