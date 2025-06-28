const express = require('express');
const { listProducts, addProduct } = require('../controllers/product.controller');
const router = express.Router();

router.get('/get',listProducts );
router.post('/add', addProduct)

module.exports = router;
