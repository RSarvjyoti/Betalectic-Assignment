const Cart = require("../models/cart.model");
const CheckoutService = require("../services/checkoutService");


exports.addItemToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne();

  if (!cart) {
    cart = new Cart({ items: [] });
  }

  const existingItem = cart.items.find(item => item.product.toString() === productId);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  res.json(cart);
};

exports.getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne().populate('items.product');
    if (!cart || cart.items.length === 0) {
      return res.json({ items: [], total: 0, totalDiscount: 0 });
    }

    const result = await CheckoutService.calculate(cart);
    res.json(result);
  } catch (error) {
    console.error('Error in getCart:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.clearCart = async (req, res) => {
  await Cart.deleteMany();
  res.json({ message: 'Cart cleared' });
};