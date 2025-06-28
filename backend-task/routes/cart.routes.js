const express = require('express');
const { addItemToCart, getCart, clearCart } = require('../controllers/cart.controller');
const router = express.Router();


router.post('/add', addItemToCart);
router.get('/get', getCart );
router.post('/clear', clearCart);

module.exports = router;
