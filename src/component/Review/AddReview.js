import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
const AddReview = () => {
     const { register, handleSubmit, watch, errors } = useForm();
     


  const onSubmit = data => {
     
    const eventData = {
      review: data.review,
      name:data.name
     
    };
    const url = `https://cryptic-castle-29216.herokuapp.com/addReview`;
    
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
        <h2>Add Service</h2>
       
         <form onSubmit={handleSubmit(onSubmit)}>
      <label>Review</label>
      <input {...register("review")} /><br></br>
      <label>Name</label>
      <input {...register("name")} /><br></br>
        <input type="submit" />
    </form>
      </div>
     
    </div>
    );
};

export default AddReview;