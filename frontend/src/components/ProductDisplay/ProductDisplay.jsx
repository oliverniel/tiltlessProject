import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart, addToCartSuccess } = useContext(ShopContext)
    const [selectedHand, setSelectedHand] = useState(null);
    const [selectedShaft, setSelectedShaft] = useState(null);
    const [selectedFlex, setSelectedFlex] = useState(null);
    const [selectedLoft, setSelectedLoft] = useState(null);
    const [errorMsg, setErrorMsg] = useState("");
    const [mainImgIndex, setMainImgIndex] = useState(0);

    if (!product || !product.images) return <div>Loading...</div>; 

    const renderOptionButtons = (options, selected, setSelected) => {
        return Array.isArray(options)
            ? options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button${selected === option ? ' selected' : ''}`}
                  onClick={() => setSelected(option)}>
                  {option}
                </button>
              ))
            : (
                <button
                  className={`option-button${selected === options ? ' selected' : ''}`}
                  onClick={() => setSelected(options)}>
                  {options}
                </button>
              );
    };

    const handleAddToCart = () => {
        if ((product.hand && !selectedHand) ||
            (product.shaft && !selectedShaft) ||
            (product.flex && !selectedFlex) ||
            (product.loft && !selectedLoft)) {
            setErrorMsg("Valitse kaikki tuotteen ominaisuudet ennen lisäämistä ostoskoriin.");
            return;
        }
        setErrorMsg("");
        addToCart(product.id, {
            hand: selectedHand,
            shaft: selectedShaft,
            flex: selectedFlex,
            loft: selectedLoft
        });
    };

    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {product.images.map((img, index) => (
                        <img
                            key={index}
                            src={typeof img === 'string' ? img : img.src}
                            alt={typeof img === 'object' ? img.alt : product.name}
                            onClick={() => setMainImgIndex(index)}
                            style={{
                                border: mainImgIndex === index ? '2px solid #405d27' : undefined,
                                cursor: 'pointer'
                            }}
                        />
                    ))}
                </div>
                <div className="productdisplay-img">
                    <img
                        className='productdisplay-main-img'
                        src={typeof product.images[mainImgIndex] === 'string'
                            ? product.images[mainImgIndex]
                            : product.images[mainImgIndex]?.src}
                        alt={product.name}
                     />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.brand} {product.name}</h1>
                <div className="productdisplay-right-price">
                    <p>{product.price} €</p>
                </div>
                <div className="productdisplay-right-description">
                    <p>{product.description}</p>
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
                {errorMsg && <div style={{color: 'red', margin: '8px 0'}}>{errorMsg}</div>}
                {addToCartSuccess && (
                  <div style={{color: 'green', margin: '8px 0'}}>Tuote lisätty ostoskoriin!</div>
                )}
                <div className="productdisplay-right-add">
                    <button onClick={handleAddToCart}>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDisplay;