const express = require('express');
const { addProduct, removeProduct, listProduct, singleProduct } = require('../controllers/productController');
const { upload } = require('../middlewares/multer');
const { adminAuth } = require('../middlewares/adminAuth');

const productRouter = express.Router();

productRouter.post('/add', adminAuth, upload.fields([{ name: 'img1', maxCount:1 }, { name: 'img2', maxCount:1 }, { name: 'img3', maxCount:1 }, { name: 'img4', maxCount:1 }]), addProduct);
productRouter.post('/remove', adminAuth, removeProduct);
productRouter.get('/list', listProduct);
productRouter.post('/single', singleProduct);

module.exports = productRouter