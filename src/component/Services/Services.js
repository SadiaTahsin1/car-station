import React from 'react';
import {Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Services.css';
const Services = ({s}) => {
    
    const history=useHistory();
    const handleSelection=(_id)=>{
        history.push(`/book/${_id}`);
       
      }
    return (
        <div className="col-md-3" style={{padding:"10px"}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={s.imageURL} className="image" style={{ height:"60px",width:"60px", margin:"5% 35%"}}/>
            <div class="overlay">
    <div class="text">Hello World</div>
  </div>
            <Card.Body>
                <Card.Title>{s.name}</Card.Title>
                <Card.Text>
                ${s.price}
                </Card.Text>
                <Button variant="primary" onClick={()=>handleSelection(s._id)}>Book Now</Button>
                
            </Card.Body>
            </Card>
            </div>
       
    );
};

export default Services;