import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remFromCart } from '../../redux/actions/cartAction';

const Cart = (props) => {
    const {cart,remFromCart} = props;
    console.log(cart)
    return (
        <div>

           <ul>
           {
               cart.map(id=><li>{id}  <button onClick={()=>remFromCart(id)}>Cancel </button></li>)
           } 
           {cart.length && <Link to= '/checkout'><button>Buy</button></Link> }
           
           </ul> 
        </div>
    );
};
const mapStateToProps = state =>{
    return{
        cart: state.cart,
        services:state.services

    }
}
const mapDispatchToProps ={
    remFromCart:remFromCart
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);