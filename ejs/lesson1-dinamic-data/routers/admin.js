const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/product/list',(req,res)=>{
    res.render("admin/product-list");
})


router.use('/',(req,res)=>{
    res.render("auth/login");
})




module.exports = router;