import React from 'react';

import ShowSrvice from '../ShowService/ShowSrvice';
import { addToCart } from '../../redux/actions/cartAction';
import { connect } from 'react-redux';
import Cart from '../Cart/Cart';
const Service = (props) => {
    const {services,addToCart}= props;
   
    return (
        <div className="row" style={{margin:"5% 10%"}}>
          <div className="col-md-12" style={{ margin:"2%"}}> <p style={{fontSize:"30px",fontFamily:"fantasy",textAlign:"center"}}>Our Services</p></div>  
          { services.map(s=> <ShowSrvice s={s} key={s.id} addToCart={addToCart}></ShowSrvice>)}
        <Cart></Cart>
        </div>
       
    );
};
const mapStateToProps = state =>{
    return {
        cart:state.cart,
        services:state.services
    }
}
const mapDispatchToProps = {
    addToCart:addToCart
}

export default connect(mapStateToProps,mapDispatchToProps)(Service);