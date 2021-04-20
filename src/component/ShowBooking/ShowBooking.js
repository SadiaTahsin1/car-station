import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {Card,Button } from 'react-bootstrap';
const ShowBooking = ({o}) => {
    console.log(o)

    return (
     <div className="row" style={{margin:"10px"}}>
     <div className="col-md-3" style={{padding:"10px"}}>
     <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={o.service.imageURL} style={{ height:"60px",width:"60px", margin:"5% 35%" }}/>
            <Card.Body>
                <Card.Title>{o.service.name}</Card.Title>
                <Card.Text>
                  <form>
                  <select id="status" name="status" style={{backgroundColor:"orangered",padding:"2%"}}>
                  <option value={o.status}>{o.status}</option>
                    {o.status==="pending" && <div><option value="saab">processing</option>
                    <option value="fiat">Done</option></div>}
                    <option value={o.status}>{o.status}</option>
                    {o.status==="processig" && <div><option value="saab">pending</option>
                    <option value="fiat">Done</option></div>}
                    <option value={o.status}>{o.status}</option>
                    {o.status==="done" && <div><option value="saab">processing</option>
                    <option value="fiat">pending</option></div>}
                  </select>
                  </form>
                <button >{o.status}</button>
                </Card.Text>
                 
            </Card.Body>
            </Card>
     </div> 
        </div>
        
    );
};

export default ShowBooking;