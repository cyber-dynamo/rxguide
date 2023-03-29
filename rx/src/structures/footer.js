import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


import '../App.css';

function Footer() {
  return (
    <Container fluid className='footer'>
      
      <Row>
        <Col><Button variant="light"><FaFacebookSquare /></Button>{''}</Col>
        <Col><Button variant="light"><BsInstagram/></Button>{' '}</Col>
        <Col><Button variant="light"><BsLinkedin/></Button>{' '}</Col>
      </Row>
      <Row>
      <Col></Col>
        <Col lg={5}>© 2023-2023 Paco Chan All rights reserved</Col>
        <Col></Col>
      </Row>
    
    </Container>
  );
}

export default Footer;