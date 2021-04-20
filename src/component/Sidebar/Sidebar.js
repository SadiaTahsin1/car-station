import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
const Sidebar = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    const [isAdmin,setAdmin]=useState(false);
    useEffect(()=>{
      fetch('https://cryptic-castle-29216.herokuapp.com/isAdmin', {
        method: 'POST', 
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({email:loggedInUser.email})
      })
      .then(res => res.json())
      .then(data=>setAdmin(data))
    
    },[])
    const history=useHistory();
    const handleSelection=()=>{
        history.push('/book');
        
      };
      const handleSelection1=()=>{
        history.push('/bookingList');
        
      };
      const handleSelection2=()=>{
        history.push('/addReview');
        
      }
       const handleSelection3=()=>{
        history.push('/addService');
        
      }
      const handleSelection4=()=>{
        history.push('/addAdmin');
        
      }
      const handleSelection5=()=>{
        history.push('/manage');
        
      }
    return (
        <div>
        { isAdmin && <h3><a onClick={()=>handleSelection3()} style={{cursor:"pointer"}}>Add Service</a></h3>}<br></br>
         {  !isAdmin && <h3><a onClick={()=>handleSelection()} style={{cursor:"pointer"}}>Book</a></h3>}<br></br>
         <h3><a onClick={()=>handleSelection1()} style={{cursor:"pointer"}}>Service List</a></h3><br></br>
         { isAdmin && <h3><a onClick={()=>handleSelection4()} style={{cursor:"pointer"}}>Add an admin</a></h3>}<br></br>
         { isAdmin && <h3><a onClick={()=>handleSelection5()} style={{cursor:"pointer"}}>Manage Service</a></h3>}<br></br>
         { !isAdmin &&  <h3><a onClick={()=>handleSelection2()} style={{cursor:"pointer"}}>Review</a></h3> } 
         
        </div>

    );
};

export default Sidebar;