const express = require('express');
const router = express.Router();

const data = {
    title:"Main Page"
}

router.use('/products/:id', (req, res) => {
    res.render("client/product-details")
})

router.use('/products', (req, res) => {
    res.render("client/products")

})

router.use('/', (req, res) => {
    res.render("client/index",data)


});

module.exports = router;
