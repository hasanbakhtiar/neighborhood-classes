const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/product/list',(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/admin/product-list.html"))
})


router.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/auth/login.html"))
})




module.exports = router;