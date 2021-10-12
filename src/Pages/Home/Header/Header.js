import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logoRobot from '../../../images/logo/logo.png';
import './Header.css';

const Header = () => {
     
     return (
          <div className="top-nav">
             <Navbar bg="light" variant="light">
               <Container>
               <NavLink  to="/home" className="d-flex align-items-center logo-top"> <img
                    src={logoRobot}
                    width="50"
                    height="50"
                    className="d-inline-block align-top me-3"
                    alt=""
                    />Robot Sophia</NavLink>
               <Nav className="ms-auto">
                    <NavLink className="me-3 link-style text-dark fw-normal" to="/about">ABOUT</NavLink>
                    <NavLink className="me-3 link-style text-dark" to="/robots">ROBOTS</NavLink>
                    <NavLink className="me-3 link-style text-dark" to="/hansonai">HANSON AI</NavLink>
                    <NavLink className="me-3 link-style text-dark" to="/resources">RESOURCES</NavLink>
                    <NavLink className="me-3 link-style text-dark" to="/contact">CONTACT</NavLink>
                   
               </Nav>
               </Container>
               </Navbar>
          </div>
     );
};

export default Header;