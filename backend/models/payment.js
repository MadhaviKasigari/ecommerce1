const mongoose = require("mongoose");

const PaymentModelSchema = new mongoose.Schema({
  transactionId: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});
const PaymentModel = mongoose.model("PaymentModel", PaymentModelSchema);

module.exports = PaymentModel;
