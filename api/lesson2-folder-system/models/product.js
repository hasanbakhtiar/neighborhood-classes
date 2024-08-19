const { default: mongoose, Schema } = require('mongoose');

const productSchema = Schema({
    raw:Number,
    title:String,
    imgUrl:String,
    price:Number,
    category:String,
    brand:String,
    description:String,
    stockCount:Number,
    active:{
        type:Boolean,
        default:true
    }
});

const Product = mongoose.model("Product",productSchema);
module.exports = Product;