import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Footer() {
  return (
    <Container fluid className='footer'>
      <Row>
        <Col sm={true}>Paco Chan</Col>
        <Col sm={true}>chanpaco1990@hotmail.com</Col>
      </Row>
    </Container>
  );
}

export default Footer;