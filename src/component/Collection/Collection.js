import React from 'react';
import {Card,Button } from 'react-bootstrap';
import jas from '../../image/jazmin-flowers-with-copyspace-blue-background.jpg';
import rose from '../../image/bouquet-white-roses.jpg';
import tulip from '../../image/bouquet-pretty-pink-white-tulips-wooden-background.jpg'
import orchid from '../../image/flower-pot-with-flowers.jpg';
const Collection = () => {
    return (
        <div>
          
           <div className="row" style={{margin:"2%",backgroundColor:"mistyrose"}}>
           <h4 className="col-md-12"style={{textAlign:"center",color:"magenta",fontFamily:"fantasy",padding:"10px"}}>Our Exclusive Collections</h4> 
           <div className="col-md-3" style={{padding:"12px"}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={rose} style={{ height:"200px" }}/>
            <Card.Body>
                <Card.Title>White Rose</Card.Title>
                <Card.Text>
                $100
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
            </Card>
            </div>
            <div className="col-md-3" style={{padding:"10px"}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={tulip} style={{ height:"200px" }}/>
            <Card.Body>
                <Card.Title>Pink Tulip</Card.Title>
                <Card.Text>
                $100
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
            </Card>
            </div>
            <div className="col-md-3" style={{padding:"10px"}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={orchid} style={{ height:"200px" }}/>
            <Card.Body>
                <Card.Title>Purple Orchid</Card.Title>
                <Card.Text>
                $100
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
            </Card>
            </div>
            <div className="col-md-3" style={{padding:"10px"}}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={jas} style={{ height:"200px" }}/>
            <Card.Body>
                <Card.Title>Jasmin</Card.Title>
                <Card.Text>
                $100
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
            </Card.Body>
            </Card>
            </div>
            </div>
          
          
        </div>
    );
};

export default Collection;