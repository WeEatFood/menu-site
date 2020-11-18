/** @format */
import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/navbar.scss"

const NavBar = () => {
  return (
    <div className='App'>
      <ReactBootStrap.Navbar
        className="navbar"
        collapseOnSelect
        expand='xl'
        variant='dark'>
        <ReactBootStrap.Navbar.Brand href='#home'>
          PUBHUB
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <ReactBootStrap.Navbar.Collapse id='responsive-navbar-nav'>
          <ReactBootStrap.Nav className='mr-auto'>
          <Link to='/booking'>
              <ReactBootStrap.Nav.Link href='#booking'>
                BOOK A TABLE
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to='/online'>
              <ReactBootStrap.Nav.Link href='#onlline'>
                ORDER ONLINE
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to='/menu'>
              <ReactBootStrap.Nav.Link href='#menu'>
                MENU
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to='/info'>
              <ReactBootStrap.Nav.Link href='#info'>
                INFO
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link to='/faq'>
              <ReactBootStrap.Nav.Link href='#faq'>
                FAQS
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to='/contact'>
              <ReactBootStrap.Nav.Link eventKey={2} href='#contact'>
                CONTACT US
              </ReactBootStrap.Nav.Link>
            </Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default NavBar;
