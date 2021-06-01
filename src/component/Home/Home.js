import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Service from '../Services/Service';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
const Home = () => {
    return (
        <div>
        <Navbar></Navbar>
        <Header></Header>
        <Service></Service>
        <Footer></Footer> 
       
        </div>
    );
};

export default Home;