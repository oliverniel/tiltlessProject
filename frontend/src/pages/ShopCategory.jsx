import React, {useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';

const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
    return (
        <div className='shop-cateogory'>
            <img src={props.banner} alt=""/>
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 produc
                </p>
                <div className="shopcategory-sort">
                    
                </div>
            </div>
        </div>
    );
}


export default ShopCategory;
