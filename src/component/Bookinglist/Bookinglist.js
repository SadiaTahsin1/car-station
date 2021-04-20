import React,{ useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import ShowBooking from '../ShowBooking/ShowBooking';
import Sidebar from '../Sidebar/Sidebar';

const Bookinglist = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email = loggedInUser.email;
    const [order,setOrder]=useState([]);
    console.log('id',email)
    useEffect(()=>{
        fetch(`https://cryptic-castle-29216.herokuapp.com/booking/${email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[email])
    console.log(order)
    return (
         <div style={{display:"grid",gridTemplateColumns:"30% 60%",margin:"5%"}}>
         <Sidebar />
        <div style={{padding:"5%",float:"left"}}>
        <h2>Booking List</h2>
         {order.map(o=><ShowBooking o={o}></ShowBooking>)
            }
       
        </div>
       
      </div>
    );
};

export default Bookinglist;