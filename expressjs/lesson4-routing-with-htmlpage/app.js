const express = require('express');
const app = express();

const path = require('path')

app.use('/products/:id', (req, res) => {
    res.sendFile(path.join(__dirname,"views/product-details.html"))
    

})

app.use('/products', (req, res) => {
    res.sendFile(path.join(__dirname,"views/products.html"))
})

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname,"views/index.html"))

});







app.listen(7000, () => {
    console.log('listening on port 7000');

})

