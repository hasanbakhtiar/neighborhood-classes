const express = require('express');
const app = express();



app.use('/products/:id/user/:username', (req, res) => {
    console.log(req.params);
    
    // if (req.params.id == 1) {
    //     res.send('Product 1')
    // } else if (req.params.id == 2) {
    //     res.send('Product 2')
    // }else {
    //     res.send('no product')
    // }
})

app.use('/products', (req, res) => {
    res.send('Product list page')
})

app.use('/', (req, res) => {
    res.send('Home page')

});







app.listen(7000, () => {
    console.log('listening on port 7000');

})

