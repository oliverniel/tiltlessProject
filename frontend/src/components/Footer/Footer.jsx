import React from 'react';
import './Footer.css';
import instagram_icon from '../assets/instagram_icon.jpg';
import logo from "../assets/logo.png";
import Pinterest_logo from '../assets/Pinterest-logo.png';
import whatsapp_logo from '../assets/whatsapp-logo.png';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-logo'>
                <img src={logo} alt = "" />
                <p>TILTLESS</p>
            </div>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={Pinterest_logo} alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_logo} alt=""/>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 - All Right Reserved</p>
            </div>
        </div>
    );
}

export default Footer;
