import React, { useEffect, useState }  from 'react';
import Collection from '../Collection/Collection';
import Footer from '../Footer/Footer';
import TopPart from './TopPart';
import Extra from './Extra';
import Review from '../Review/Review';
import Services from '../Services/Services';
const Home = () => {
    const [services, setServices] = useState([]);
    const [reviews, setReviews] = useState([]);

     useEffect(() => {
        fetch('https://cryptic-castle-29216.herokuapp.com/services')
         .then(res => res.json())
         .then(data => setServices(data))
     }, [])
     useEffect(() => {
        fetch('https://cryptic-castle-29216.herokuapp.com/review')
         .then(res => res.json())
         .then(data => setReviews(data))
     }, [])

    return (
        <div>
         <TopPart></TopPart>
         <div style={{backgroundColor:"moccasin"}}>
          <h3 style={{color:"mediumslateblue",fontFamily:"sans-serif",textAlign:"center"}}>Our Services</h3>   
         <div className="row" style={{margin:"10px"}}>
           
         {services.map(s =><Services s={s}></Services>)}
         </div>
         <Collection></Collection>
         
         {reviews.map(r =><Review r={r}></Review>)}
         <Extra></Extra>
         <Footer></Footer>
         </div>
         
        </div>
    );
};

export default Home;