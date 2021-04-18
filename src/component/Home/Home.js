import React, { useEffect, useState }  from 'react';
import Collection from '../Collection/Collection';
import Footer from '../Footer/Footer';
import TopPart from './TopPart';
import Review from '../Review/Review';
import Services from '../Services/Services';
const Home = () => {
    const [services, setServices] = useState([]);

     useEffect(() => {
        fetch('https://flower-shop-server1.herokuapp.com/services')
         .then(res => res.json())
         .then(data => setServices(data))
     }, [])

    return (
        <div>
         <TopPart></TopPart>
         <div style={{backgroundColor:"moccasin"}}>
         {services.map(s =><Services s={s}></Services>)}
         
         <Collection></Collection>
         <Review></Review>
         <Footer></Footer>
         </div>
         
        </div>
    );
};

export default Home;