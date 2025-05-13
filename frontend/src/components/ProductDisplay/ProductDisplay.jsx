import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext)
    const [selectedHand, setSelectedHand] = useState(null);
    const [selectedShaft, setSelectedShaft] = useState(null);
    const [selectedFlex, setSelectedFlex] = useState(null);
    const [selectedLoft, setSelectedLoft] = useState(null);

    const renderOptionButtons = (options, selected, setSelected) => {
        return Array.isArray(options)
            ? options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${selected === option ? 'active' : ''}`}
                  onClick={() => setSelected(option)}>
                  {option}
                </button>
              ))
            : (
                <button
                  className={`option-button ${selected === options ? 'active' : ''}`}
                  onClick={() => setSelected(options)}>
                  {options}
                </button>
              );
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {product.images.map((img, index) => (
                        <img key={index} src={img.src} alt={img.alt} />
                    ))}
                </div>
                <div className="productdisplay-img">
                    <img className='productdisplay-main-img' src={product.images[0].src} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.brand} {product.name}</h1>
                <div className="productdisplay-right-price">
                    <p>{product.price} €</p>
                </div>
                <div className="productdisplay-right-description">
                    <p>{product.describtion}</p>
                </div>
                <div className="productdisplay-right-category">
                    <p>Category: {product.type}</p>
                </div>
                <div className="productdisplay-right-hand">
                    <p>Kätisyys:</p>
                    {renderOptionButtons(product.hand, selectedHand, setSelectedHand)}
                </div>
                <div className="productdisplay-right-shaft">
                    <p>Varret:</p>
                    {renderOptionButtons(product.shaft, selectedShaft, setSelectedShaft)}
                </div>
                <div className="productdisplay-right-flex">
                    <p>Flex:</p>
                    {renderOptionButtons(product.flex, selectedFlex, setSelectedFlex)}
                </div>
                <div className="productdisplay-right-loft">
                    <p>Loft:</p>
                    {renderOptionButtons(product.loft, selectedLoft, setSelectedLoft)}
                </div>
                <div className="productdisplay-right-add">
                    <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;