const express = require("express");
const app = express();
const database = require("./config/database");
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  const player = new User({
    firstName: "Sagar",
    lastName: "Gharami",
    emailId: "sagar@gmail.com",
    password: "456",
  });

  await player.save();
  res.send("User added successfully");
});

database()
  .then(() => {
    console.log("DB connecting established");
    app.listen(3333, () => console.log("Server has been started"));
  })
  .catch((err) => console.error("DB connecting failed", err));
