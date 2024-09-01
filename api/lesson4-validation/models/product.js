const { default: mongoose, Schema } = require('mongoose');
const Joi = require('joi');
const productSchema = Schema({
    row: Number,
    title: String,
    img: String,
    price: Number,
    category: String,
    brand: String,
    description: String,
    stockCount: Number,
    active: {
        type: Boolean,
        default: true
    }
});



const validationProduct = (product) => {
    const schema = new Joi.object({
        row: Joi.number(),
        title: Joi.string().required(),
        img: Joi.string(),
        price: Joi.number(),
        category: Joi.string(),
        brand: Joi.string(),
        description: Joi.string(),
        stockCount: Joi.number(),
        active: Joi.boolean()
    })

 return schema.validate(product);
}


const Product = mongoose.model("Product", productSchema);
module.exports = {Product, validationProduct};