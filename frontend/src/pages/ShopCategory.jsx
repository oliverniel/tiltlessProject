import React, {useContext} from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';
import dropdown_icon from '../components/assets/drop_icon.png';
import Item from '../components/Item/Item';



const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
    const [sortMenuOpen, setSortMenuOpen] = React.useState(false);
    const [sortOption, setSortOption] = React.useState('default');

    let filteredProducts = all_products.filter(item =>
        item.category.includes(props.category));

    // Lajittelu valinnan mukaan
    if (sortOption === 'price-asc') {
        filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
    } else if (sortOption === 'alpha-asc') {
        filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'alpha-desc') {
        filteredProducts = [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name));
    }

    const handleSortSelect = (option) => {
        setSortOption(option);
        setSortMenuOpen(false);
    };

    const sortLabels = {
        'default': 'No sorting',
        'price-asc': 'Price ascending',
        'price-desc': 'Price descending',
        'alpha-asc': 'Alphabetical A-Z',
        'alpha-desc': 'Alphabetical Z-A'
    };

    return (
        <div className='shop-category'>
            <img src={props.banner} alt=""/>
            <div className="shopcategory-banner-fade"></div>
            <div className="shopcategory-indexSort">
                <p>
                    Showing all products in the category
                </p>
                <div className="shopcategory-sort" style={{position: 'relative', cursor: 'pointer', userSelect: 'none'}} onClick={() => setSortMenuOpen(o => !o)}>
                    Sort by: <span style={{fontWeight:'bold'}}>{sortLabels[sortOption]}</span>
                    <img 
                        src={dropdown_icon} 
                        alt=""
                        style={{
                            marginLeft: 6,
                            transition: 'transform 0.2s',
                            transform: sortMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                        }}
                    />
                    {sortMenuOpen && (
                        <div style={{position: 'absolute', top: '100%', left: 0, background: '#fff', border: '1px solid #ccc', zIndex: 10, minWidth: '160px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                            <div style={{padding: '8px', cursor: 'pointer'}} onClick={e => {e.stopPropagation(); handleSortSelect('price-asc')}}>Price min-max</div>
                            <div style={{padding: '8px', cursor: 'pointer'}} onClick={e => {e.stopPropagation(); handleSortSelect('price-desc')}}>Price max-min</div>
                            <div style={{padding: '8px', cursor: 'pointer'}} onClick={e => {e.stopPropagation(); handleSortSelect('alpha-asc')}}>Alfabetical A-Ö</div>
                            <div style={{padding: '8px', cursor: 'pointer'}} onClick={e => {e.stopPropagation(); handleSortSelect('alpha-desc')}}>Alfabetical Ö-A</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="shopcategory-products">
                {filteredProducts.map((item, i) => (
                    <Item 
                       key={i}
                       id={item.id}
                       name={item.name}
                       price={item.price}
                       image={typeof item.images[0] === 'string' ? item.images[0] : item.images[0]?.src}
                       alt={typeof item.images[0] === 'object' ? item.images[0].alt : item.name}
                    />
                ))} 
            </div>
        </div>
    );
}


export default ShopCategory;
