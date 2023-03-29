import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Medications = () => {

/* initial list */
  const [medList,setMedList]= useState([])
  
  useEffect(() => {
  Axios.get("http://localhost:3001/api/meds").then((res)=>{
    setMedList(res.data)
  })
},[]);

    return (
    <Container>
      <Row>
      <Col></Col>
      <Col >
    {medList.map((val)=>{
      return(
        <div>
      <Accordion key ={val.id}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{val.drug}</Accordion.Header>
        <Accordion.Body>
          <h5>{val.conditions}</h5>
          <p>{val.engsig}</p>
          <p>{val.chisig}</p>
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      </div>
      )
    })
    }
    </Col>
    <Col></Col>
    </Row>
   </Container>
    )  
};
  
  export default Medications;

  