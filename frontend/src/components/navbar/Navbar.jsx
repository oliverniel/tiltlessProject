import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart-icon.png";
import { useState } from "react";

const Navbar = () => {

    const [menu, setMenu] = useState("Home")


    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src= {logo} alt="" />
                <p>
                    Tiltless Golf
                </p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("newClubs")}}>New clubs{menu==="newClubs"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("usedClubs")}}>Used clubs{menu==="usedClubs"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("balls")}}>Balls{menu==="balls"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <img src={cart_icon} alt="" />
                <div className="nav-cart-count">
                    0
                </div>
            </div>
        </div>
    )
}


export default Navbar;
