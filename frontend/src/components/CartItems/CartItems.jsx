import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import removeicon from '../assets/removeicon.png'

const CartItems = () => {
    const {all_products, cartItems, cartDetails, removeFromCart, getTotalCartAmount, setCartDetails} = useContext(ShopContext)

    const cartVariantKeys = Object.keys(cartDetails);

    return (
      <div className="cartitems">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Options</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {cartVariantKeys.length > 0 && cartVariantKeys.map((key) => {
          const item = cartDetails[key];
          const product = all_products.find((p) => p.id === Number(item.id));
          if (!product) return null;
          return (
            <React.Fragment key={key}>
              <div className="cartitems-format cartitems-format-main">
                <img
                  src={
                    product.images && product.images.length > 0
                      ? (typeof product.images[0] === 'string'
                          ? product.images[0]
                          : product.images[0].src || product.images[0].url || '')
                      : ''
                  }
                  alt={product.images && product.images.length > 0 ? (typeof product.images[0] === 'object' ? product.images[0].alt : product.name) : product.name}
                  className='carticon-product-icon'
                />
                <p>{product.brand} {product.name}</p>
                <p>{product.price} €</p>
                <button className='cartitems-quantity'>
                  {item.qty}
                </button>
                <p>
                  {['hand','shaft','flex','loft'].map(opt => item[opt] ? `${opt}: ${item[opt]}` : null).filter(Boolean).join(', ')}
                </p>
                <p>{product.price * item.qty} €</p>
                <img src={removeicon} onClick={()=>{
                  removeFromCart(item.id, {
                    hand: item.hand,
                    shaft: item.shaft,
                    flex: item.flex,
                    loft: item.loft
                  });
                }} alt ="" className="removeicon-image"/> 
              </div>
              <hr />
            </React.Fragment>
          )
        })}
        {cartVariantKeys.length === 0 && all_products.map((e) => {
          if (cartItems[e.id]>0) {
              return (
                <React.Fragment key={e.id}>
                  <div className="cartitems-format cartitems-format-main">
                      <img 
                        src={
                          e.images && e.images.length > 0
                            ? (typeof e.images[0] === 'string' 
                                ? e.images[0] 
                                : e.images[0].src || e.images[0].url || '')
                            : ''
                        }
                        alt={e.images && e.images.length > 0 ? (typeof e.images[0] === 'object' ? e.images[0].alt : e.name) : e.name}
                        className='carticon-product-icon'
                      />
                      <p>{e.brand} {e.name}</p>
                      <p>{e.price} €</p>
                      <button className='cartitems-quantity'>
                        {cartItems[e.id]}
                      </button>
                      <p>-</p>
                      <p>{e.price*cartItems[e.id]} €  </p>
                      <img src={removeicon} onClick={()=>{
                        removeFromCart(e.id);
                      }} alt ="" className="removeicon-image"/> 
                  </div>
                  <hr />
                </React.Fragment>
              )
          }
          return null
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>
              Cart Total
            </h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()} €</p>
              </div>
              <div className="cartitems-total-item">
                <p>Shipping fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>{getTotalCartAmount()} €</h3>
              </div>
              <button
                onClick={() => {
                  fetch('http://localhost:4000/checkout', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                      'aut-token': localStorage.getItem('aut-token')
                    }
                    , body: JSON.stringify({
                      total: getTotalCartAmount()
                    })
                  })
                    .then(res => res.json())
                    .then(data => {
                      if (data.success) {
                        alert('Tilaus tehty!');
                        setCartDetails({});
                      } else {
                        alert(data.message || 'Tilaus epäonnistui');
                      }
                    });
                }}
              >
                PROCEED TO CHECKOUT 
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CartItems