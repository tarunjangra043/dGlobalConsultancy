const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  basePrice: { type: Number, required: true },
  isPurchased: { type: Boolean, default: false },
  expirationDate: { type: Date, default: null },
  email: { type: String, default: null },
});

exports.productModel = mongoose.model("Product", ProductSchema);
