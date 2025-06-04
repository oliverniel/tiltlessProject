import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext(null)

const getDefaultCart = () =>{
    let cart = {}
    for(let i=1; i<300+1; i++){
        cart[i] = 0
    }
    return cart
}

const ShopContextProvider = (props) => {

    const [all_products, setAllProducts] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const [cartDetails, setCartDetails] = useState({});

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then((response) => response.json())
            .then((data)=>setAllProducts(data))

            if(localStorage.getItem('aut-token')){
                fetch('http://localhost:4000/getcart', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'aut-token': `${localStorage.getItem('aut-token')}`,
                        'Content-Type': 'application/json'
                    },
                    body:"",
                })
                .then((response) => response.json())
                .then((data) => {
                    console.log('Cart data fetched:', data);
                    if (data && typeof data === 'object' && Object.values(data).some(item => typeof item === 'object' && 'qty' in item)) {
                        setCartDetails(data);
                    } else {
                        setCartItems(data)
                    }
                })
                .catch((err) => console.error('Get cart fetch error:', err)); 
            }
    }, [])


    const addToCart = (itemID, options = {}) => {
 
        const alreadyInCart = Object.values(cartDetails).some(item => item.id === itemID);
        if (alreadyInCart) {
            alert('Tämä tuote on jo ostoskorissa. Vain yksi sallitaan.');
            return;
        }

        console.log('addToCart called', itemID, options);
        console.log('aut-token:', localStorage.getItem('aut-token'));
        console.log('all_products:', all_products);
        const product = all_products.find((p) => p.id === itemID || p.id === Number(itemID));
        console.log('product:', product);


        const variantKey = [itemID, options.hand, options.shaft, options.flex, options.loft].filter(Boolean).join('_');

        setCartDetails((prev) => ({
            ...prev,
            [variantKey]: {
                id: itemID,
                qty: prev[variantKey]?.qty ? prev[variantKey].qty + 1 : 1,
                ...options
            }
        }));

        if (product && product.category && (Array.isArray(product.category) ? product.category.includes('usedClubs') : product.category === 'usedClubs')) {
            setCartItems((prev) => ({
                ...prev,
                [itemID]: 1
            }));
        } else {
            setCartItems((prev)=>({...prev, [itemID]: prev[itemID] + 1}))
        }

        if (localStorage.getItem('aut-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'aut-token': `${localStorage.getItem('aut-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemID, options }),
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.error('Add to cart fetch error:', err));
        }
        console.log(cartItems)
        console.log('cartDetails', cartDetails)
    }

    const removeFromCart = (itemID, options = {}) => {
        const variantKey = [itemID, options.hand, options.shaft, options.flex, options.loft].filter(Boolean).join('_');
        setCartDetails((prev) => {
            const newDetails = { ...prev };
            delete newDetails[variantKey];
            return newDetails;
        });
        setCartItems((prev)=>({...prev, [itemID]: 0}))
        if(localStorage.getItem('aut-token')) {
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'aut-token': `${localStorage.getItem('aut-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemID, options })
            })
            .then((response) => response.json())
            .then((data) => {
                if (data.success && data.cartDataDetails) {
                    setCartDetails(data.cartDataDetails);
                }
            })
            .catch((err) => console.error('Remove from cart fetch error:', err));
        }
    }

    const getTotalCartAmount = () => {
    let totalAmount = 0;

    if (cartDetails && Object.keys(cartDetails).length > 0) {
        Object.values(cartDetails).forEach(item => {
            const itemInfo = all_products.find(product => product.id === Number(item.id));
            if (itemInfo) {
                totalAmount += (item.qty || 1) * itemInfo.price;
            }
        });
    }

    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            const isInDetails = Object.values(cartDetails).some(detail => Number(detail.id) === Number(item));
            if (!isInDetails) {
                const itemInfo = all_products.find(product => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += cartItems[item] * itemInfo.price;
                }
            }
        }
    }

    return totalAmount;
}

    const getTotalCartItems = () => {

        if (cartDetails && Object.keys(cartDetails).length > 0) {
            return Object.values(cartDetails).reduce((sum, item) => sum + (item.qty || 0), 0);
        }

        let totalItems = 0
        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                totalItems += cartItems[item]
            }
        }
        return totalItems
    }
            
    const contextValue = {all_products, cartItems, cartDetails, setCartDetails, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems}

    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;