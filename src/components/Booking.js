import React, { useState } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

function Booking() {
  const [modalShow, setModalShow] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
      <>
        <ReactBootStrap.Button variant="primary" onClick={() => setModalShow(true)}>
          Launch vertically centered modal
        </ReactBootStrap.Button>

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    </div>
    )
}

export default Booking

function MyVerticallyCenteredModal(props) {
  return (
    <ReactBootStrap.Modal
      {...props}
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
        <ReactBootStrap.Button onClick={props.onHide}>Close</ReactBootStrap.Button>
      </ReactBootStrap.Modal.Footer>
    </ReactBootStrap.Modal>
  );
}


