import React, { useEffect, useState }  from 'react';
import HandleService from '../HandleService/HandleService';
import { useHistory } from 'react-router';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
   
    const [service, setService] = useState([]);
   
        useEffect(() => {
           fetch('https://cryptic-castle-29216.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
        }, [])
   console.log('item',service);
    return (
        <div style={{display:"grid",gridTemplateColumns:"30% 60%",margin:"5%"}}>
         <Sidebar />
        <div style={{padding:"5%",float:"left"}}>

             {
                  service.map(s =><HandleService s={s}></HandleService>)
               }
        </div></div>
    );
};

export default ManageService;