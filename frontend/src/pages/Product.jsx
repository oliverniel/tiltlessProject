import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import {ShopContext} from '../Context/ShopContext';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
    const {all_products} = useContext(ShopContext)
    const {id} = useParams()
    const product = all_products.find((product) => product.id === parseInt(id))

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
        </div>
    );
}

export default Product;
