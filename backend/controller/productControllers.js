const Product = require("../models/Product");
// const OrderModel = require("../models/order.js");
// const CartItem = require("../models/CartItem");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
    // console.log(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProductByCategory = async (req, res) => {
  try {
    console.log(req.params);
    const product = await Product.find(req.params);

    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// const getProductByorderId = async (req, res) => {
//   try {
//     console.log(req.params);
//     const product = await OrderModel.findByorderId(req.params.id);

//     res.json(product);
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

// router.get(
//   "/ordertrack/:orderId",
//   handler(async (req, res) => {
//     const { orderId } = req.params;
//     const user = await UserModel.findById(req.user.id);

//     const filter = {
//       _id: orderId,
//     };

//     if (!userAdmin) {
//       filter.user = user._id;
//     }

//     const order = await OrderModel.findOne(filter);
//     if (!order) return res.send(UNAUTHORISED);
//     return res.send(order);
//   })
// );

// const addToCart = async (req, res) => {
//   try {
//     // Extract the product id and quantity from the request body
//     const { productId, quantity } = req.body;

//     // Create a new cart item object
//     const cartItem = new CartItem({
//       product: productId,
//       quantity: quantity,
//     });

//     // Save the cart item to the database
//     await cartItem.save();

//     // Send a success response
//     res
//       .status(201)
//       .json({ message: "Item added to cart successfully", cartItem });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

module.exports = {
  getAllProducts,
  getProductById,
  getProductByCategory,
  // getProductByorderId,
  // addToCart,
};
