import React, {useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';
import dropdown_icon from '../components/assets/drop_icon.png';
import Item from '../components/Item/Item';



const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
    const filteredProducts = all_products.filter(item =>
        item.category.includes(props.category))

    return (
        <div className='shop-cateogory'>
            <img src={props.banner} alt=""/>
            <div className="shopcategory-indexSort">
                <p>
                    Showing all products in the category
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt=""/>        
                </div>
            </div>
            <div className="shopcategory-products">
                {filteredProducts.map((item, i) => (
                    <Item 
                       key={i}
                       id={item.id}
                       name={item.name}
                       price={item.price}
                       image={item.images[0].src}
                       alt={item.images[0].alt}
                    />
                ))} 
            </div>
        </div>
    );
}


export default ShopCategory;
