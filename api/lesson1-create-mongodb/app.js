const express = require('express');
const { default: mongoose, Schema } = require('mongoose');
const app = express();

app.use(express.json());

const productSchema = Schema({
    raw:Number,
    title:String,
    imgUrl:String,
    price:Number,
    category:String,
    brand:String,
    description:String,
    stockCount:Number,
    active:Boolean
});

const Product = mongoose.model("Product",productSchema);






(async()=>{
    try {
        await mongoose.connect("mongodb+srv://hasanbakhtiar:hasanTutorials2024@shop.eptjk.mongodb.net/?retryWrites=true&w=majority&appName=Shop");
        console.log('mongodb connect is successfully');
        
    } catch (error) {
        console.log(error);
        
    }
})();


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