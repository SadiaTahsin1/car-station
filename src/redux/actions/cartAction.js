export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'


export const addToCart = name => {
    return {type: ADD_TO_CART,name}
}

export const remFromCart = name => {
     return {type: REMOVE_FROM_CART, name}
}