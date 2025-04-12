import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Receive emails of clubs coming for sale for sale</h1>
            <p>Subscribe to our lewsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Enter your email' />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;
