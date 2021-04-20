import React, { useContext, useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { UserContext } from '../../App';
import Sidebar from '../Sidebar/Sidebar';
import Payment from '../Payment/Payment';
const Book = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser)
  const {_id} = useParams();
  const [service,setService]=useState({});
  useEffect(()=>{
    fetch(`https://cryptic-castle-29216.herokuapp.com/service/${_id}`)
    .then(res=>res.json())
    .then(data=>setService(data));
},[_id])
const handleCheckout=paymentId=>{
  const bookingDetail={...loggedInUser,service:service,bookingPlaced:new Date,status:"pending"}
  console.log('orderDetail',bookingDetail)
  fetch('https://cryptic-castle-29216.herokuapp.com/booking', {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingDetail)
    })
    .then((res => console.log('server side response', res)))
};

    return (
         <div style={{display:"grid",gridTemplateColumns:"30% 60%",margin:"5%"}}>
         <Sidebar />
        <div style={{padding:"5%",float:"left"}}>
        <h2>Book</h2>
        <p>Name: {loggedInUser.name}</p>
        <p>Service: {service.name}</p>
        <p>Service cost is ${service.price}</p>
        <Payment handlePayment={handleCheckout}></Payment>
          {/* <Button variant="primary" style={{marginLeft:"35%",marginTop:"2%"}} onClick={handleCheckout}>Checkout</Button>
        */}
        </div>
       
      </div>
    );
};

export default Book;