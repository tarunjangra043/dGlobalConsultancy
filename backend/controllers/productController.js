const { productModel } = require("../models/productModel");

// Fetch all products
const getProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Handle purchase
const purchaseProduct = async (req, res) => {
  const { productId, email, days } = req.body;

  try {
    const product = await productModel.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });
    console.log(product);

    const expirationDate = new Date(Date.now() + days * 24 * 60 * 60 * 1000);

    product.isPurchased = true;
    product.expirationDate = expirationDate;
    product.email = email;

    await product.save();

    res
      .status(200)
      .json({ message: "Service purchased successfully", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Handle renew
const renewProduct = async (req, res) => {
  const { productId, days } = req.body;

  try {
    const product = await productModel.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const newExpirationDate = new Date(
      Math.max(Date.now(), product.expirationDate.getTime()) +
        days * 24 * 60 * 60 * 1000
    );

    product.expirationDate = newExpirationDate;

    await product.save();

    res.status(200).json({ message: "Service renewed successfully", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProducts = getProducts;
exports.purchaseProduct = purchaseProduct;
exports.renewProduct = renewProduct;
