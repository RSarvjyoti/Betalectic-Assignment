const Product = require("../models/product.model");

exports.listProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

exports.addProduct = async (req, res) => {
  try {
    const { code, name, price } = req.body;

    if (!code || !name || !price) {
      return res.status(400).json({ error: "code, name, and price are required" });
    }

    const existing = await Product.findOne({ code });
    if (existing) {
      return res.status(400).json({ error: "Product code must be unique" });
    }

    const newProduct = new Product({ code, name, price });
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};