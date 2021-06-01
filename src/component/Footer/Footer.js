import React from 'react';
import { Link } from 'react-router-dom';
import f from '../../New folder/images/Vector-2.png';
import g from '../../New folder/images/Vector-1.png';
import h from '../../New folder/images/Vector-3.png';


const Footer = () => {
    return (
        <div className="row" style={{margin:'2%', backgroundColor:"gray"}}>
            <Link to="/login"><p>Login</p></Link>
            
             <div className="col-md-4" style={{ margin:"5%", textAlign:"left",color:"white",fontFamily:"sans-serif"}}>
             <h3 style={{color:"white"}}>About Us</h3> 
             <p>We are Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, ex.</p>
             </div>
             <div className="col-md-4" style={{ margin:"5%",textAlign:"left",color:"white",fontFamily:"sans-serif"}}>
             <h5>Contact</h5>  
             <h5>Terms</h5>
             <h5>Support Center</h5>
             <img src={f} alt="" style={{height:"40px",width:"45px"}}></img> <img src={g} alt="" style={{height:"40px",width:"45px"}}></img> <img src={h} alt="" style={{height:"40px",width:"45px"}}/> 
             </div>
            
        </div>
    );
};

export default Footer;