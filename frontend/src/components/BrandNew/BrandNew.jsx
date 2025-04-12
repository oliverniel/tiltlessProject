import React from 'react';
import './BrandNew.css';
import all_products from '../assets/all_products.js'
import Item from '../Item/Item';

const BrandNew = () => {
    const newProducts = all_products.filter(item=>item.new && item.type != 'Ball');

    return (
        <div className='brand-new'>
            <h1>NEW GEAR</h1>
            <hr />
            <div className='new-item'>
                {newProducts.map((item,i) => {
                    return <Item 
                            key={i} 
                            id={item.id} 
                            ame={item.name} 
                            image={item.images[1].src} 
                            alt={item.images[1].alt}
                            price={item.price}/>
            })}
            </div>
        </div>
    );
}

export default BrandNew;
