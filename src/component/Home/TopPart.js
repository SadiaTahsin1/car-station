import React from 'react';
import Navbar from './Navbar';
import TopMain from './TopMain/TopMain';
import './TopPart.css';
const TopPart = () => {
    return (
        <section className="top">
            
          <h2 style={{textAlign:"center",color:"purple", paddingTop:"5%",fontFamily:"serif"}}>Flower Land</h2>
            
            <Navbar></Navbar>
            <TopMain></TopMain>
        </section>
       
    );
};

export default TopPart;