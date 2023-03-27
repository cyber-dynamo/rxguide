import React, { useEffect, useState } from 'react';
import Axios from "axios";
import Card from 'react-bootstrap/Card';

const Prescribing = () => {

  const [drugList,setDrugList]= useState([])
  
  useEffect(() => {
  Axios.get("http://localhost:3001/api/get").then((res)=>{
    setDrugList(res.data)
  })
},[]);

    return (
    <div className='card'>
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
        <Card.Link href="#">Alternatives</Card.Link>
      </Card.Body>
    </Card>
   
      )
    })
    }
   </div>
    )  
};
  
  export default Prescribing;

  