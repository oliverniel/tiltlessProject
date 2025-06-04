import React from 'react';
import './Hero.css';
import rage_photo from '../assets/rage_photo.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-text'>
                <h1>Are you tired of being tilted on the golf course?</h1>
                <p>How about you check our collection for top tier golf equipment? New and used clubs to achieve tiltless moments on the golf course</p>
                <Link to="/allProducts">
                    <button className='hero-button'>Shop Now</button>
                </Link>
            </div>
            <img src={rage_photo} alt="" className="hero-img-large" />
        </div>
    );
}

export default Hero;