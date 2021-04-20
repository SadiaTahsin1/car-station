import React from 'react';
import {Card,Button } from 'react-bootstrap';
const Review = ({r}) => {
    return (
        <section  style={{marginTop:"5%"}}>
        <h3 style={{color:"mediumorchid",textAlign:"center",fontFamily:"cursive"}}>Inspiring Reviews</h3>
        <div className="row" style={{margin:"2%",backgroundColor:"moccasin",padding:"2%"}}>
        <div className="col-md-3">
          <Card style={{ width: '18rem' }}>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {r.review}
                </p>
                <footer className="blockquote-footer">
                {r.name}
                </footer>
                </blockquote>
            </Card.Body>
            </Card>
        </div></div></section>
    );
};

export default Review;