const express = require('express');
const router = express.Router();

const data = {
    title:"Main Page",
    products:[
        {
            id:1,
            title:"Asus ROG",
            price:3000,
            image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2F3doVKbdxZSuzySGKNR2MbL.jpg&f=1&nofb=1&ipt=edd68c3c850689028a800fc85dcbe10abd846d3f7a3c095c1fa46cebba5509f0&ipo=images",
            active:false

        },
        {
            id:2,
            title:"Acer Predator",
            price:2700,
            image:"https://images.idgesg.net/images/article/2020/06/predator-helios-300-ph315-53-high_01-100849581-orig.jpg",
            active:false
        },
        {
            id:3,
            title:"Lenovo Legion",
            price:2500,
            image:"https://dev.mos.cms.futurecdn.net/Sb4onRLyqFrjWgn3GhFabe.jpg",
            active:true
        }
    ]
}

router.use('/products/:id', (req, res) => {
    res.render("client/product-details")
})

router.use('/products', (req, res) => {
    res.render("client/products",data)

})

router.use('/', (req, res) => {
    res.render("client/index",data)


});

module.exports = router;
