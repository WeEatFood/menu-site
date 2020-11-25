/** @format */
import React from 'react'
import Booking from './components/Booking'
import ContactUs from './components/ContactUs'
import Faq from './components/Faq'
import Info from './components/Info'
import Home from './components/Home'
import Items from './containers/Item/items'
// import Online from './components/Online'
import Menu from './components/Menu'
import NavBar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={ Home }/>
          <Route path="/booking" component={ Booking }/>/>
          <Route path="/contact" component={ ContactUs }/>/>
          <Route path="/faq" component={ Faq }/>
          <Route path="/info" component={ Info }/>
          <Route path="/menu" component={ Menu }/>
          <Route path="/online" component={ Items }/>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
