const mongoose = require("mongoose");

const connectDB = async () =>
  await mongoose.connect(
    "mongodb+srv://DevTinder:Lgzf71iKfUpp7Hws@devtinder.bz74mkj.mongodb.net/user"
  );

module.exports = connectDB;
