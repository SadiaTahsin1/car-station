import React from 'react';
import { useHistory } from 'react-router';
const Sidebar = () => {
    const history=useHistory();
    const handleSelection=()=>{
        history.push('/book');
        
      };
      const handleSelection1=()=>{
        history.push('/list');
        
      };
      const handleSelection2=()=>{
        history.push('/review');
        
      }
       const handleSelection3=()=>{
        history.push('/addService');
        
      }
    return (
        <div>
            <h3><a onClick={()=>handleSelection3()} style={{cursor:"pointer"}}>Add Service</a></h3><br></br>
             <h3><a onClick={()=>handleSelection()} style={{cursor:"pointer"}}>Book</a></h3><br></br>
            <h3><a onClick={()=>handleSelection1()} style={{cursor:"pointer"}}>Service List</a></h3><br></br>
            <h3><a onClick={()=>handleSelection2()} style={{cursor:"pointer"}}>Review</a></h3>  
         
        </div>

    );
};

export default Sidebar;