import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logoRobot from '../../../images/logo/logo.png';
import './Header.css';

const Header = () => {
     
     return (
          <div className="top-nav">
             <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
               <Container>
               <Navbar.Brand as={Link}  to="/home">
               <img
                    src={logoRobot}
                    width="226"
                    height="60"
                    className="d-inline-block align-top"
                    alt=""
                    />
               </Navbar.Brand>
               <Navbar.Toggle />
               <Navbar.Collapse className="justify-content-end">

                    <Nav.Link as={Link} to="/about">ABOUT</Nav.Link>
                    <Nav.Link as={Link} to="/robots">ROBOTS</Nav.Link>
                    <Nav.Link as={Link} to="/hansonai">HANSON AI</Nav.Link>
                    <Nav.Link as={Link} to="/resources">RESOURCES</Nav.Link>
                    <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>

                    <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
               </Navbar.Collapse>
               
               </Container>
               </Navbar>
          </div>
     );
};

export default Header;