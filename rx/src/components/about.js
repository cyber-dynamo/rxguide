import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Aboutme from '../structures/aboutme';

const About = () => {
    return (
      <div className='background'>
      <Container className="aboutcontainer">
      <Row>
        <Col sm={4} className="pacoprofile">
          <img src="pacoai.png" alt="pacoai" className="pacoimg" />
          <h5>Paco Parc Ho Chan</h5>
          <p>BSC Pharmacy</p>
        </Col>
        <Col sm={8}><Aboutme/></Col>
      </Row>
      
    </Container>
    </div>
    )
  };
  
  export default About;