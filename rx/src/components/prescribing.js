import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Prescribing = () => {

/* initial list */
  const [drugList,setDrugList]= useState([])
  
  useEffect(() => {
  Axios.get("http://localhost:3001/api/get").then((res)=>{
    setDrugList(res.data)
  })
},[]);

/* new list */

const updateList = ((Condition)=>{
  Axios.get(`http://localhost:3001/api/get${Condition}`).then(
    (res)=>{setDrugList(res.data);} )
})
    return (
    <Container>
      <Row>
      <Col></Col>
      <Col >
    {drugList.map((val)=>{
      return(
        <Card style={{ width: '18rem' }} key={val.id} >
      <Card.Body>
        <Card.Title>{val.Category}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{val.Drug}</Card.Subtitle>
        <Card.Text>
          {val.Dose}
        </Card.Text>
        <Card.Text>{val.DIN}</Card.Text>
        <Button variant="primary" onClick={()=> {updateList(val.Condition)}}>Alternatives</Button>
      </Card.Body>
    </Card>
   
      )
    })
    }
    </Col>
    <Col></Col>
    </Row>
   </Container>
    )  
};
  
  export default Prescribing;

  