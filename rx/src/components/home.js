import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ControlledCarousel from '../structures/carousel';
import HomeIntro from '../structures/homeintro';

const Home = () => {
    return (
      <div className="background">
        <Container>
      <Row>
        <Col>
        <HomeIntro/>
        </Col>
        <Col xs={8}><ControlledCarousel /></Col>
      </Row>

    </Container>
    
    </div>
    )
  };
  
  export default Home;