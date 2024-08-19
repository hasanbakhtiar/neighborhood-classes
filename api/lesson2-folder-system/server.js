const express = require('express');
const Product = require('./models/product');
const connectdb = require('./config/connectdb');
const app = express();

app.use(express.json());








connectdb();

app.get('/',(req,res)=>{
    res.send("Start App");
})

app.post('/addproduct',async(req,res)=>{
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.send(newProduct);
    res.end();
})

app.get("/productlist",async(req,res)=>{
    const product = await Product.find();
    res.send(product);
    res.end();
})


app.listen("3001",()=>{
    console.log("Server on port 3001");
    
})