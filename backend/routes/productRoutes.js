// import signupAdmin from "./admin/signup-admin";

const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  getProducts,
  getProductByCategory,
  // getProductByorder,
  // addToCart,
} = require("../controller/productControllers");

// @desc GET all products from db
//  @route GET /api/products
// @access Public
router.get("/", getAllProducts);

// @desc GET a product by id from db
//  @route GET /api/products/:id
// @access Public

router.get("/:id", getProductById);

router.get("/category/:category", getProductByCategory);

module.exports = router;
