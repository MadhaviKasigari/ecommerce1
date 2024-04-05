const mongoose = require("mongoose");

const OrderModelSchema = new mongoose.Schema({
  orderId: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
const OrderModel = mongoose.model("OrderModel", OrderModelSchema);

module.exports = OrderModel;
