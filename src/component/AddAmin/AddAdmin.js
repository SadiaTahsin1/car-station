import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
const AddAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
     
        const eventData = {
          name: data.name,
          email:data.email
        };
        const url = `https://cryptic-castle-29216.herokuapp.com/addAdmin`;
        
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response', res))
      };
    
     
        return (
            <div style={{display:"grid",gridTemplateColumns:"30% 60%",gridTemplateRows:"100%",marginLeft:"5%"}}>
            <Sidebar />
            <div style={{padding:"5%",float:"left"}}>
            <h2>Add Admin</h2>
           
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Service Name</label>
          <input {...register("name")} /><br></br>
          <label>Email</label>
          <input {...register("email")} /><br></br>
         
         
          <input type="submit" />
        </form>
          </div>
         
        </div>
        );
    };

export default AddAdmin;