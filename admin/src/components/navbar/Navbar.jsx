import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import navProfile from '../../assets/navProfile.webp'


const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="" className="nav-logo" />
        <img src={navProfile} alt="" className="navProfile"/>
    </div>
  )
}

export default Navbar
