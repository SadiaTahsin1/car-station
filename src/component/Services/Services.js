import React from 'react';
import {Card,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import orchid from '../../image/flower-pot-with-flowers.jpg';
const Services = ({s}) => {
    
    const history=useHistory();
    const handleSelection=()=>{
        history.push('/book');
       
      }
    return (
        <div className="row" style={{margin:"2%"}}>
            <div className="col-md-3" style={{padding:"10px"}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={s.imageURL} style={{ height:"200px" }}/>
            <Card.Body>
                <Card.Title>{s.name}</Card.Title>
                <Card.Text>
                ${s.price}
                </Card.Text>
                <Button variant="primary" onClick={()=>handleSelection()}>Buy Now</Button>
            </Card.Body>
            </Card>
        </div></div>
    );
};

export default Services;