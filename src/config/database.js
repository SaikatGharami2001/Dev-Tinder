const mongoose = require("mongoose");

const connectDB = async () =>
  await mongoose.connect(
    "mongodb+srv://DevTinder:Lgzf71iKfUpp7Hws@devtinder.bz74mkj.mongodb.net/"
  );

connectDB()
  .then(() => console.log("DB connecting established"))
  .catch((err) => console.error("DB connecting failed", err));

module.exports = { connectDB };
