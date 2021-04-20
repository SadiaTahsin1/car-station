import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';

const HandleService = ({s}) => {
   const deleteItem=id=>{
     fetch(`https://cryptic-castle-29216.herokuapp.com/service/${id}`,
     {method:"DELETE"})
     .then(res=>res.json())
     .then(result=>console.log('deleted')) 
   }
    return (
        <div>
       
           <table>
           <tr><td style={{width:"120px",textAlign:"center"}}>{s.name}</td>
           
           <td style={{width:"120px",textAlign:"center"}}>${s.price}</td>
          

           <td style={{width:"120px",textAlign:"center"}}><button><FontAwesomeIcon icon={faTrash} onClick={()=>deleteItem(s._id)}/></button></td></tr>
          </table> 
        </div>
    );
};

export default HandleService;