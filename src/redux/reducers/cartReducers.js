import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";
import p1 from '../../New folder/images/car-repair.png';
import p2 from '../../New folder/images/car-wash.png';
import p3 from '../../New folder/images/air-conditioning.png';

const initialState = {
    cart: [],
    services: [ {
        name:'Car Repair',
        id:1,
        pic:p1
    },
    {
        name:'Car Wash',
        id:2,
        pic:p2
    },
    {
        name:'AC Fixing',
        id:3,
        pic:p3
    }]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type){
         case ADD_TO_CART:
            // const newId = action.id;
             const newName = action.name;
             const newCart = [...state.cart,newName]
             return {
               ...state,
                cart : newCart
             }
          case REMOVE_FROM_CART:
              const name = action.name;
              const otherCart = state.cart.filter(item => item !== name);
              return {...state,cart: otherCart}
        default:
             return state;
    }
}
export default cartReducers;