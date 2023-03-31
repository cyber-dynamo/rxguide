import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

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
         <div class='row'>
    {drugList.map((val)=>{
      return(
        <div class='col-md-4'>
        <Card style={{ width: '20rem' }} key={val.id} >
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
    </div>
      )})}
      <Button variant="danger" onClick={() => window.open("https://www2.gov.bc.ca/gov/content/health/health-drug-coverage/pharmacare-for-bc-residents/what-we-cover/prescription-contraceptives", '_blank')}>
            Birth Control
        </Button>
    </div>
    </Container>
     
    )  
};
  
  export default Prescribing;

  