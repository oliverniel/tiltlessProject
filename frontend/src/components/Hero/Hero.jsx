import React from 'react';
import './Hero.css';
import hello_image from '../assets/hello_image.png';
import arrow_image from '../assets/arrow.png';
import swing_image from '../assets/swing.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hello-icon">
                        <p>new</p>
                        <img src={hello_image} alt="" />
                    </div>
                    <p>collection</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_image} alt="" />
                </div>
            </div>
            <div className="hero-right">
                <img src={swing_image} alt="" />

            </div>
        </div>
    );
}

export default Hero;
