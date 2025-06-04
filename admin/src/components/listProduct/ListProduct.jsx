import React from 'react'
import './ListProduct.css'
import { useState, useEffect } from 'react'

const ListProduct = () => {

  const [allProducts, setAllProducts] = useState([])

  const fetchProducts = async () => {
    await fetch('http://localhost:4000/allproducts')
      .then((response)=> response.json())
      .then((data) => {setAllProducts(data)})
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="list-product">
      <h1>All products list</h1>
      <div className="listproduct-format-main">
          <p>Products</p>
          <p>Name</p>
          <p>Brand</p>
          <p>Description</p>
          <p>Price</p>
          <p>Category</p>
          <p>Hand</p>
          <p>Shaft</p>
          <p>Flex</p>
          <p>Loft</p>
          <p>Type</p>
          <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product) => (
          <React.Fragment key={product.id}>
            <div className="listproduct-format">
              <img src={product.images[0]} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.brand}</p>
              <p>{product.description}</p>
              <p>{product.price} €</p>
              <p>{product.new ? 'New clubs' : 'Used Clubs'}</p>
              <p>{product.hand.join(', ')}</p>
              <p>{product.shaft.join(', ')}</p>
              <p>{product.flex.join(', ')}</p>
              <p>{product.loft.join(', ')}</p>
              <p>{product.type}</p>
              <button onClick={() => {
                fetch('http://localhost:4000/removeproduct', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ id: product.id }),
                }).then((response) => response.json()).then((data) => {
                  data.success ? alert('Product removed successfully!') : alert('Failed to remove product')
                  fetchProducts()
                })
              }}>Remove</button>
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ListProduct
