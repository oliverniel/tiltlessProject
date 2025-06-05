const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'build')));

app.use(express.json())
app.use(cors())

// Databasse connection with MongoDB 
mongoose.connect(process.env.MONGODB_URI)

// Image storage engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${file.fieldname}_${uniqueSuffix}${path.extname(file.originalname)}`);
}
})

const upload = multer({ storage: storage})

// Creating upload endpoint for images
app.use('/images', express.static('upload/images'))

app.post("/upload", upload.array('product'), (req,res)=> {
  res.json({
    success: 1,
    images_url: req.files.map(file => `/images/${file.filename}`)
  })
})

// Scheema for creating products
const Product = mongoose.model('Product', {
    id:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    hand:  {
        type: [String],
        required: true
    },
    shaft: {
        type: [String],
        required: true
    },
    flex: {
        type: [String],
        required: true
    },
    loft: {
        type: [String],
        required: true
    },
    category: {
        type: [String],
        required: true
    },
    new: {
        type: Boolean,
        required: true
    },
})

app.post('/addproduct', async (req, res) => {
    let products = await Product.find({})
    let id
    if(products.length>0){
        let last_product_array = products.slice(-1)
        let last_product = last_product_array[0]
        id = last_product.id + 1
    } else {
        id = 1
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        brand: req.body.brand,
        type: req.body.type,
        description: req.body.description,
        price: req.body.price,
        images: req.body.images,
        hand: req.body.hand,
        shaft: req.body.shaft,
        flex: req.body.flex,
        loft: req.body.loft,
        category: req.body.category,
        new: req.body.new,
        available: req.body.available
    })
    await product.save()
    res.json({
        success: true,
        name: req.body.name
    })
})

// Api for deleting products
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id })
    res.json({
        success: true,
        id: req.body.id
    })
})

// API for getting all products
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({})
    res.send(products)
})

// Schema for creating users
const Users = mongoose.model('Users', {
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    cartData: {
        type: Object
    },
    cartDataDetails: {
        type: mongoose.Schema.Types.Mixed, 
        default: {}
    },
    orders: {
        type: [mongoose.Schema.Types.Mixed],
        default: []
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//Creating Endpoint for registering users
app.post('/signup', async (request, response) => {
    
    let check = await Users.findOne({ email: request.body.email })
    if (check) {
        return response.status(400).json({
            success: false,
            errors: "Email already in use"
        })
    }
    let cart = {};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const user = new Users({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        cartData: cart
    })
    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, process.env.SECRET)
    response.json({
        success: true,
        token: token
    })
})

// Endpoint for logging in
app.post('/login', async (request, response) => {
    let user = await Users.findOne({ email: request.body.email })
    if (!user) {
        return response.json({ success: false, errors: "A AAA nice try but wrong email" })
    }

    const passCompare = request.body.password === user.password;
    if (passCompare) {
        const data = {
            user: {
                id: user.id
            }
        }
        const token = jwt.sign(data, process.env.SECRET)
        response.json({success:true, token: token, email: user.email})
    } else {
        response.json({success: false, errors: "A AAA nice try but wrong passoword"})
}})

// creating middleware for fecth user
const fetchUser = (req, res, next) => {
    const token = req.header('aut-token')
    if (!token) {
        return res.status(401).send({ errors: "Please authenticate using a valid token" })
    } else {
        try {
            const data = jwt.verify(token, process.env.SECRET);
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({ errors: "Please authenticate using a valid token" })
            }
}}

// Creating endpoint for adding items to cart
app.post('/addtocart', fetchUser, async(req, res) => {
    let userData = await Users.findOne({_id: req.user.id})
    if (!userData.cartDataDetails) userData.cartDataDetails = {};
    const variantKey = [req.body.itemId, req.body.options?.hand, req.body.options?.shaft, req.body.options?.flex, req.body.options?.loft].filter(Boolean).join('_');
    if (Object.values(userData.cartDataDetails).some(item => item.id == req.body.itemId)) {
        return res.status(400).json({ success: false, message: "Vain yksi tuote sallitaan ostoskoriin tällä id:llä." });
    }
    if (!userData.cartDataDetails[variantKey]) {
        userData.cartDataDetails[variantKey] = {
            id: req.body.itemId,
            qty: 1,
            ...req.body.options
        };
    } else {
        return res.status(400).json({ success: false, message: "Vain yksi tuote sallitaan ostoskoriin tällä id:llä ja varianteilla." });
    }
    userData.cartData[req.body.itemId] = 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData, cartDataDetails: userData.cartDataDetails})
    res.json({ success: true, message: "Added to cart", cartDataDetails: userData.cartDataDetails });
})

// Creating endpoint to remove items from cart
app.post('/removefromcart', fetchUser, async(req, res) => {
    let userData = await Users.findOne({_id: req.user.id})
    if (!userData.cartDataDetails) userData.cartDataDetails = {};
    const variantKey = [req.body.itemId, req.body.options?.hand, req.body.options?.shaft, req.body.options?.flex, req.body.options?.loft].filter(Boolean).join('_');
    if (!userData.cartDataDetails[variantKey]) {
        return res.json({ success: false, message: "Varianttia ei löydy ostoskorista" });
    }
    delete userData.cartDataDetails[variantKey];
    let stillExists = Object.values(userData.cartDataDetails).some(item => item.id == req.body.itemId);
    if (!stillExists) {
        userData.cartData[req.body.itemId] = 0;
    }
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData, cartDataDetails: userData.cartDataDetails})
    res.json({ success: true, message: "Removed", cartDataDetails: userData.cartDataDetails });
})

app.post('/checkout', fetchUser, async (req, res) => {
    let userData = await Users.findOne({_id: req.user.id});
    if (!userData.cartDataDetails || Object.keys(userData.cartDataDetails).length === 0) {
        return res.json({ success: false, message: "Ostoskori on tyhjä" });
    }
    const newOrder = {
        items: userData.cartDataDetails,
        date: new Date(),
        total: req.body.total
    };
    userData.orders = userData.orders || [];
    userData.orders.push(newOrder);
    userData.cartData = {};
    userData.cartDataDetails = {};
    await Users.findOneAndUpdate(
        { _id: req.user.id },
        { orders: userData.orders, cartData: {}, cartDataDetails: {} }
    );
    res.json({ success: true, message: "Tilaus tehty", orders: userData.orders });
});

app.get('/orders', fetchUser, async (req, res) => {
    let userData = await Users.findOne({_id: req.user.id});
    res.json({ success: true, orders: userData.orders || [] });
});

// creating endpoint for getting users cart data
app.post('/getcart', fetchUser, async(req, res) => {
    let userData = await Users.findOne({_id: req.user.id})
    res.json(userData.cartDataDetails || userData.cartData) 
})


app.listen(process.env.PORT, (error) => {
    if (!error) {
        console.log(`Server is running on port ${process.env.PORT}`)
    } else {
        console.log('Error : ', error)
    }
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});