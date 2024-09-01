const express = require('express');
const { listProduct, detailsProduct, editProduct, addProduct, deleteSingleProduct, deleteAllProduct } = require('../controllers/product');
const upload = require('../middleware/uploadFile');
const router = express.Router();


router.delete('/delete/all',deleteAllProduct);
router.delete('/delete/:id',deleteSingleProduct);

router.post('/add',upload.single('img'),addProduct);
router.post('/:id',detailsProduct);

router.put('/edit/:id',editProduct);
router.get("/",listProduct);

module.exports = router;
