const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  emailId: { type: String },
  password: { type: Number },
});

const user = mongoose.model("User", userSchema);

module.exports = user;
