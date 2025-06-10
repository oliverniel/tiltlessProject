import React from 'react'
import './AddProduct.css'
import { useState } from 'react'
import upload_icon from '../../assets/upload.jpg'

const AddProduct = () => {

  const API_URL = import.meta.env.VITE_API_URL;

  const [images, setImages] = useState([])
  const [productDetails, setProductDetails] = useState({
    name: '',
    price: '',
    category: ['newClubs', 'allProducts'], // muutettu arrayksi
    brand: '',
    description: '',
    type: '', 
    hand: [],
    shaft: [],
    flex: [],
    loft: [],
    new: true
  })

  const handleImage = (e) => {
    setImages([...images, ...Array.from(e.target.files)])
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (["hand", "shaft", "flex", "loft"].includes(name)) {
      setProductDetails(prev => ({
        ...prev,
        [name]: value.trim() === '' ? [] : value.split(',').map(v => v.trim()).filter(Boolean)
      }))
    } else if (name === "category") {
      setProductDetails(prev => ({
        ...prev,
        category: [value, "allProducts"]
      }))
    } else if (type === "checkbox") {
      setProductDetails(prev => ({ ...prev, [name]: checked }))
    } else {
      setProductDetails(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(productDetails, images)
    let responseData;
    let product = { ...productDetails };
    if (!product.category.includes('allProducts')) {
      product.category = [...product.category, 'allProducts']
    }

    let formData = new FormData()
    images.forEach(img => formData.append('product', img))

    await fetch(`${API_URL}/upload`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData,
    }).then((response) => response.json()).then((data) => {responseData = data})

    if (responseData.success) {
      product.images = responseData.images_url
      console .log(product)
      await fetch(`${API_URL}/addproduct`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
      }).then((response) => response.json()).then((data) => {
        if (data.success) {
          alert('Product added successfully!');
          window.location.reload();
        } else {
          alert('Failed to add product');
        }
      })
    }
  }

  return (
    <form className="add-product" onSubmit={handleSubmit}>
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input type="text" name='name' placeholder='Type here' onChange={handleChange} />
      </div>
      <div className="addproduct-itemfield">
        <p>Brand</p>
        <input type="text" name='brand' placeholder='Type here' onChange={handleChange} />
      </div>
      <div className="addproduct-itemfield">
        <p>Description</p>
        <textarea name='description' placeholder='Type here' onChange={handleChange} />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input type="text" name='price' placeholder='Type here' onChange={handleChange} />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select name="category" className="add-product-selector" onChange={handleChange}>
          <option value="newClubs">New Clubs</option>
          <option value="usedClubs">Used Clubs</option>
          <option value="balls">Balls</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <p>Hand</p>
        <input type="text" name='hand' placeholder='Right, Left' onChange={handleChange} />
      </div>
      <div className="addproduct-itemfield">
        <p>Shaft (comma separated)</p>
        <input type="text" name='shaft' placeholder='Steel, Graphite' onChange={handleChange} />
      </div>
      <div className="addproduct-itemfield">
        <p>Flex (comma separated)</p>
        <input type="text" name='flex' placeholder='Stiff, Regular' onChange={handleChange} />
      </div>
      <div className="addproduct-itemfield">
        <p>Loft (comma separated)</p>
        <input type="text" name='loft' placeholder='9°, 10°' onChange={handleChange} />
      </div>
      <div className="addproduct-itemfield">
        <p>Type</p>
        <input type="text" name='type' placeholder='Type here' onChange={handleChange} />
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={upload_icon} className="addproduct-thumnail-img" alt="" />
        </label>
        <input onChange={handleImage} type="file" name="images" id="file-input" multiple hidden />
        <div style={{marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          {images.map((img, idx) => (
            <img
              key={idx}
              src={URL.createObjectURL(img)}
              alt={img.name}
              className="addproduct-thumnail-img"
              style={{width: '80px', height: '80px', objectFit: 'cover', border: '1px solid #ccc'}}
            />
          ))}
        </div>
      </div>
      <div className="addproduct-itemfield">
        <label>
          New product
          <input type="checkbox" name="new" checked={productDetails.new} onChange={handleChange} className="addproduct-newbtn" />
        </label>
      </div>
      <button className="addproduct-btn" type="submit">ADD</button>
    </form>
  )
}

export default AddProduct
