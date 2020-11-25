import React from 'react'
import Map from './info/Map'
import Hours from './info/Hours-Open'
import '../scss/info.scss'

const Info = () => (
  <div className="info__container">
    <Map/>
    <Hours/>
  </div>
)

export default Info

