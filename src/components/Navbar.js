/** @format */
import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../assets/boulderlogo.png'
import '../scss/navbar.scss'

const NavBar = () => {
  return (
    <div className='container__navbar'>
        <img src={Logo} alt="logo" className="logo"/>
      <ReactBootStrap.Navbar
        className="navbar"
        collapseOnSelect
        expand='xl'
        variant='dark'>
        <ReactBootStrap.Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <ReactBootStrap.Navbar.Collapse id='responsive-navbar-nav'>
          <ReactBootStrap.Nav className='mr-auto'>
            <LinkContainer className to='/booking'>
              <ReactBootStrap.Nav.Link className="navbar__link" style={{ color: "black"}}>
                BOOK A TABLE
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
            <LinkContainer to='/online'>
              <ReactBootStrap.Nav.Link className="navbar__link">
                ORDER ONLINE
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
            <LinkContainer to='/menu'>
              <ReactBootStrap.Nav.Link className="navbar__link">
                MENU
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
            <LinkContainer to='/info'>
              <ReactBootStrap.Nav.Link className="navbar__link">
                INFO
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <LinkContainer to='/faq'>
              <ReactBootStrap.Nav.Link className="navbar--right">
                FAQS
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <ReactBootStrap.Nav.Link eventKey={ 2 } className="navbar--right">
                CONTACT US
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  )
}

export default NavBar
