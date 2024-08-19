const Product = require("../models/product");

exports.listProduct = async(req,res)=>{
    const product = await Product.find();
    res.send(product);
}

exports.addProduct = async(req,res)=>{
    const product = new Product(req.body);
    const newProduct = await product.save();
    res.send(newProduct);
}

exports.detailsProduct = async(req,res)=>{
    const product = await Product.findById({_id:req.params.id});
    res.send(product);
}

exports.editProduct = async(req,res)=>{
    const product = await Product.findByIdAndUpdate({_id:req.params.id},req.body);
    res.send(product);
}


exports.deleteSingleProduct = async(req,res)=>{
    const product = await Product.findByIdAndDelete({_id:req.params.id});
    res.send(product);
}

exports.deleteAllProduct = async(req,res)=>{
    const product = await Product.deleteMany();
    res.send(product);
}