import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
const AddService = () => {
     const { register, handleSubmit, watch, errors } = useForm();
     const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
     
    const eventData = {
      name: data.name,
     
      price:data.price,
      imageURL: imageURL
    };
    const url = `https://cryptic-castle-29216.herokuapp.com/addService`;
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => console.log('server side response', res))
  };

  const handleImageUpload = event => {
    console.log(event.target.files[0])
    const imageData = new FormData();
    imageData.set('key', '3ac4f0b4b557619bd2c651b376f15155');
    imageData.append('image', event.target.files[0]);
    
    axios.post('https://api.imgbb.com/1/upload', 
    imageData)
    .then(function (response) {
      setIMageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
    return (
        <div style={{display:"grid",gridTemplateColumns:"30% 60%",gridTemplateRows:"100%",marginLeft:"5%"}}>
        <Sidebar />
        <div style={{padding:"5%",float:"left"}}>
        <h2>Add Service</h2>
       
         <form onSubmit={handleSubmit(onSubmit)}>
      <label>Service Name</label>
      <input {...register("name")} /><br></br>
      <label>Cost  </label>
      <input {...register("price")}/><br></br>
      <input {...register("pic")} type="file" onChange={handleImageUpload}/> <br></br>
      <input type="submit" />
    </form>
      </div>
     
    </div>
    );
};

export default AddService;