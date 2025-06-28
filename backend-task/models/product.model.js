const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  name: String,
  price: Number
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;