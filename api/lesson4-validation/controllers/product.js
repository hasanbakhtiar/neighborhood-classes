const { Product, validationProduct } = require("../models/product");

exports.listProduct = async (req, res) => {
    const product = await Product.find();
    res.send(product);
}

exports.addProduct = async (req, res) => {
    const { error } = validationProduct(req.body);
    if (error) {
        res.status(404);
        res.send(error.details[0].message);
    } else {
        if (req.file) {
            const product = new Product(
                {   
                    title:req.body.title,
                    img:req.file.path
                }
            );
            const newProduct = await product.save();
            res.send(newProduct);
        }

    }

}

exports.detailsProduct = async (req, res) => {
    const product = await Product.findById({ _id: req.params.id });
    res.send(product);
}

exports.editProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate({ _id: req.params.id }, req.body);
    res.send(product);
}


exports.deleteSingleProduct = async (req, res) => {
    const product = await Product.findByIdAndDelete({ _id: req.params.id });
    res.send(product);
}

exports.deleteAllProduct = async (req, res) => {
    const product = await Product.deleteMany();
    res.send(product);
}