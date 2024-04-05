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
// router.get("/api/products/order", getProductByorder);
// router.route("/login").get((req, res) => res.render("login"));
// // .post(login);
// router.route("/signup").get((req, res) => res.render("signup"));
// .post(signup);
// router.get("/", (req, res) => {
//   res.render("login");
// });

router.get("/category/:category", getProductByCategory);

// this.get("/product.category", (schema, request) => schema.products.all());
// this.get("/products/:category", (schema, request) => {
//   let category = request.params.category;
//   return schema.products.where((product) =>
//     product.category.toLowerCase().includes(title.toLowerCase())
//   );
// });

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const axios = require("axios");

// // Define your API base URL
// const API_BASE_URL = "https://localhost: 5000";

// // Route to fetch all products
// router.get("/", async (req, res) => {
//   try {
//     // Fetch the API key from environment variables
//     const apiKey = process.env.API_KEY;

//     // Make an API call using the API key
//     const response = await axios.get(
//       `${API_BASE_URL}/products?apiKey=${apiKey}`
//     );

//     // Send back the response data
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // Route to fetch a product by ID
// router.get("/:id", async (req, res) => {
//   try {
//     // Fetch the API key from environment variables
//     const apiKey = process.env.API_KEY;

//     // Extract the product ID from request parameters
//     const productId = req.params.id;

//     // Make an API call using the API key and product ID
//     const response = await axios.get(
//       `${API_BASE_URL}/products/${productId}?apiKey=${apiKey}`
//     );

//     // Send back the response data
//     res.json(response.data);
//   } catch (error) {
//     console.error("Error fetching product by ID:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// module.exports = router;
