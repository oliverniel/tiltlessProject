import React, { createContext, useState } from 'react';
import all_products from '../components/assets/all_products';

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {}
    for(let i=1; i<all_products.length+1; i++){
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    //console.log(cartItems)
    const addToCart = (itemID) => {
        setCartItems((prev)=>({...prev, [itemID]: prev[itemID] + 1}))
        console.log(cartItems)
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev)=>({...prev, [itemID]: prev[itemID] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if(cartItems[item] > 0){
                let itemInfo = all_products.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    const getTotalCartItems = () => {
        let totalItems = 0
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItems += cartItems[item]
            }
        }
        return totalItems
    }
            
    const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;