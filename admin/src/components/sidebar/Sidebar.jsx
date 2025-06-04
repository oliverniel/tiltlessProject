import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import cart_icon from '../../assets/cart-icon.png'
import list_product from '../../assets/list_product.png'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to={'/addproduct'} style={{textDecoration: 'none'}}>
            <div className="sidebar-item">
                <img src={cart_icon} alt=""/>
                <p>Add product</p>
            </div>
        </Link>
        <Link to={'/listproduct'} style={{textDecoration: 'none'}}>
            <div className="sidebar-item">
                <img src={list_product} alt=""/>
                <p>Product list</p>
            </div>
        </Link>
    </div>
  )
}

export default Sidebar
