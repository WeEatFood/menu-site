/** @format */
import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../scss/navbar.scss'

const NavBar = () => {
  return (
    <div className='container__navbar'>
      <ReactBootStrap.Navbar
        className="navbar"
        collapseOnSelect
        expand='xl'
        variant='dark'>
        <LinkContainer to="/">
          <ReactBootStrap.Navbar.Brand>
            PUBHUB
          </ReactBootStrap.Navbar.Brand>
        </LinkContainer>
        <ReactBootStrap.Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <ReactBootStrap.Navbar.Collapse id='responsive-navbar-nav'>
          <ReactBootStrap.Nav className='mr-auto'>
            <LinkContainer className to='/booking'>
              <ReactBootStrap.Nav.Link>
                BOOK A TABLE
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
            <LinkContainer to='/online'>
              <ReactBootStrap.Nav.Link>
                ORDER ONLINE
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
            <LinkContainer to='/menu'>
              <ReactBootStrap.Nav.Link>
                MENU
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
            <LinkContainer to='/info'>
              <ReactBootStrap.Nav.Link>
                INFO
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <LinkContainer to='/faq'>
              <ReactBootStrap.Nav.Link>
                FAQS
              </ReactBootStrap.Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <ReactBootStrap.Nav.Link eventKey={ 2 }>
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
