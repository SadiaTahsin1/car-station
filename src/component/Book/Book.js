import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
const Book = () => {
    

    return (
         <div style={{display:"grid",gridTemplateColumns:"30% 60%",marginLeft:"5%"}}>
         <Sidebar />
        <div style={{padding:"5%",float:"left"}}>
        <h2>Book</h2>
        {/* <form onSubmit={handleSubmit(onSubmit)} style={{padding:"5%",margin:"2%"}}>
        
        <input name="name" placeholder="Product Name" ref={register} />
        <input name="weight" placeholder="weight" ref={register}/><br></br>
        <input name="price" placeholder="price" ref={register}/>
        {/* <input name="exampleRequired" type="file" onChange={handleImageUpload} />
        <br></br> 
        <input type="submit" />
      </form> */}
        </div>
       
      </div>
    );
};

export default Book;