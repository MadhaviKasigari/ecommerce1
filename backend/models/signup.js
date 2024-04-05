const mongoose = require("mongoose");

const SignupModelSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
});
const SignupModel = mongoose.model("users", SignupModelSchema);

module.exports = SignupModel;
