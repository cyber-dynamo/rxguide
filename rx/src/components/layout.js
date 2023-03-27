import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from '../structures/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaClinicMedical} from 'react-icons/fa';

function Layout() {
  return (
    <div >
      <Navbar bg="light" variant="light" expand="sm">
        <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Brand as={Link} to="/" ><FaClinicMedical/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="about" >About</Nav.Link>
            <Nav.Link as={Link} to="resources" >Resources</Nav.Link>
          </Nav>  
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
      <Footer/>
     
    </div>
  );
}

export default Layout;