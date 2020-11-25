import React from 'react'
import { Clock } from 'react-feather'
import '../../scss/info.scss'

const Schedule = () => (
  <div className="info__container">
    <div className="info__hours-container">
      <h1>Hours</h1>
      <h6>We are located at 315 pine st. in Boulder CO.</h6>
      <ul className="info__hours-list">
        <li><Clock className="info__hours-clock"/>Monday</li>
        <li>2:00PM - 12:00AM</li>
      </ul>
      <ul className="info__hours-list">
        <li><Clock className="info__hours-clock"/>Tuesday</li>
        <li>2:00PM - 12:00AM</li>
      </ul>
      <ul className="info__hours-list">
        <li><Clock className="info__hours-clock"/>Wednesday</li>
        <li>2:00PM - 12:00AM</li>
      </ul>
      <ul className="info__hours-list">
        <li><Clock className="info__hours-clock"/>Thursday</li>
        <li>2:00PM - 12:00AM</li>
      </ul>
      <ul className="info__hours-list">
        <li><Clock className="info__hours-clock"/>Friday</li>
        <li>2:00PM - 2:00AM</li>
      </ul>
      <ul className="info__hours-list">
        <li><Clock className="info__hours-clock"/>Saturday</li>
        <li>2:00PM - 12:00AM</li>
      </ul>
      <ul className="info__hours-list">
        <li><Clock className="info__hours-clock"/>Sunday</li>
        <li>Closed</li>
      </ul>
    </div>
  </div>
)

export default Schedule
