import React from 'react';
import { useHistory } from 'react-router';
const Dashboard = () => {
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

    return (
         <div style={{display:"grid",gridTemplateColumns:"30% 60%",marginLeft:"5%"}}>
         <div style={{padding:"10%",backgroundColor:"navy",color:"white",float:"left"}}>
            <h3><a onClick={()=>handleSelection()} style={{cursor:"pointer"}}>Book</a></h3><br></br>
            <h3><a onClick={()=>handleSelection1()} style={{cursor:"pointer"}}>Service List</a></h3><br></br>
            <h3><a onClick={()=>handleSelection2()} style={{cursor:"pointer"}}>Review</a></h3>
        </div>
        {/* <div style={{float:"left"}}>
          <h2>Service List</h2>
            
               {
                  items.map(i =><HandleProduct i={i}></HandleProduct>)
               }</div>   */}
        </div>
    );
};

export default Dashboard;