const express = require('express');
const router = express.Router();
const path = require('path');


router.use('/products/:id', (req, res) => {
    res.sendFile(path.join(__dirname,"../views/client/product-details.html"))
})

router.use('/product/list', (req, res) => {
    res.sendFile(path.join(__dirname,"../views/client/products.html"))
})

router.use('/', (req, res) => {
    res.sendFile(path.join(__dirname,"../views/client/index.html"))

});

module.exports = router;
