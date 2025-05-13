import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart-icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useRef } from "react";
import drop_icon from "../assets/drop_icon.png";

const Navbar = () => {

    const [menu, setMenu] = useState("Home")
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef()

    const dropDown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src= {logo} alt="" />
                <p>
                    Tiltless Golf
                </p>
            </div>
            <img className='nav-dropdown' onClick={dropDown_toggle} src={drop_icon} alt=""/>
            <ul ref={menuRef}className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("allProducts")}}><Link style={{ textDecoration: 'none' }} to='/allProducts'>All products</Link>{menu==="allProducts"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("newClubs")}}><Link style={{ textDecoration: 'none' }} to='/newClubs'>New clubs</Link>{menu==="newClubs"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("usedClubs")}}><Link style={{ textDecoration: 'none' }} to='usedClubs'>Used clubs</Link>{menu==="usedClubs"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("balls")}}><Link style={{ textDecoration: 'none' }} to='balls'>Balls</Link>{menu==="balls"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    )
}


export default Navbar;
