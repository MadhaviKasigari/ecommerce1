require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const cors = require("cors");
const OrderModel = require("./models/order");
const SignupModel = require("./models/signup");
const PaymentModel = require("./models/payment");
const paymentRoutes = require("./routes/payment");

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/products", productRoutes);

app.use("/api/payment/", paymentRoutes);

app.post("/api/products/order", async (req, res) => {
  try {
    const { orderId, date, address, status } = req.body;

    const order = new OrderModel({ orderId, date, address, status });
    await order.save();
    res.status(201).json({ message: "Order created successfully", order });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/api/users/signup", async (req, res) => {
  try {
    const { Name, Email, Password } = req.body;
    const signup = new SignupModel({ Name, Email, Password });
    await signup.save();
    res.status(201).json({ message: "signup successfully", signup });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/api/users/login", async (req, res) => {
  try {
    console.log("Before getting the params:");
    const { Email, Password } = req.body;
    const user = await SignupModel.findOne({ Email });
    console.log("loggedin:", user);
    if (user == undefined || user.Password !== Password)
      res.status(403).json({ message: "Failure" });
    else if (user.Password === Password)
      res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/api/payment", async (req, res) => {
  // Simulate payment processing
  const paymentStatus = Math.random() < 0.8 ? "success" : "failure";
  const paymentResponse = PaymentModel({
    status: paymentstatus,
    transactionId: Math.floor(Math.random() * 100000),
    message:
      paymentStatus === "success" ? "Payment successful" : "Payment failed",
  });

  // Return payment response
  res.json(paymentResponse);
});

// app.get("/api/orders", async (req, res) => {
//   try {
//     const orders = await orders.find();
//     res.json(orders);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.get("/products", async (req, res) => {
//   try {
//     const { category } = req.query;
//     //   Fetch products from MongoDB with category filter
//     const products = await Product.find({ category: category });
//     res.json(products);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     res.status(500).json({ error: "Error fetching products" });
//   }
// });

// app.post("/products/cart", (req, res) => {
//   res.status(200).json({ message: "Item added to cart successfully" });
// });
// app.get("/api/products", function (req, res, next) {
//   res.json({ msg: "This is CORS-enabled for productRoutes" });
// });

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
