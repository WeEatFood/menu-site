/** @format */

import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import "../styles/navbar.sass"

const NavBar = () => {
  return (
    <div className='App'>
      <ReactBootStrap.Navbar
        className="navbar"
        collapseOnSelect
        expand='xl'
        // bg='$light'
        variant='dark'>
        <ReactBootStrap.Navbar.Brand href='#home'>
          PUBHUB
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <ReactBootStrap.Navbar.Collapse id='responsive-navbar-nav'>
          <ReactBootStrap.Nav className='mr-auto'>
          <Link to='/features'>
              <ReactBootStrap.Nav.Link href='#features'>
                BOOK A TABLE
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to='/pricing'>
              <ReactBootStrap.Nav.Link href='#pricing'>
                ORDER ONLINE
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to='/pricing'>
              <ReactBootStrap.Nav.Link href='#pricing'>
                MENU
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to='/pricing'>
              <ReactBootStrap.Nav.Link href='#pricing'>
                INFO
              </ReactBootStrap.Nav.Link>
            </Link>
            {/* <ReactBootStrap.NavDropdown
              title='YEET'
              id='collasible-nav-dropdown'>
              <ReactBootStrap.NavDropdown.Item href='#action/3.1'>
                Action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href='#action/3.2'>
                Another action
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Item href='#action/3.3'>
                Something
              </ReactBootStrap.NavDropdown.Item>
              <ReactBootStrap.NavDropdown.Divider />
              <ReactBootStrap.NavDropdown.Item href='#action/3.4'>
                Separated link
              </ReactBootStrap.NavDropdown.Item>
            </ReactBootStrap.NavDropdown> */}
          </ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link to='/deets'>
              <ReactBootStrap.Nav.Link href='#deets'>
                FAQS
              </ReactBootStrap.Nav.Link>
            </Link>
            <Link to='/ContactUs'>
              <ReactBootStrap.Nav.Link eventKey={2} href='#memes'>
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
