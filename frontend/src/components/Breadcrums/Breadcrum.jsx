import React from 'react';
import './Breadcrum.css';
import arrow from '../assets/arrow.png';

const Breadcrum = (props) => {
    const {product} = props;
    if (!product) return null; // Estetään virhe, jos product puuttuu

    return (
        <div className='breadcrum'>
            HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.type} <img src={arrow} alt="" /> {product.name}
        </div>
    );
}

export default Breadcrum;
