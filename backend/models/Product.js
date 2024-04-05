const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
const Product = mongoose.model("products", productSchema);

module.exports = Product;
