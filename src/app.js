const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("../Middlewares/adminAuth.js");

app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  res.send("This is a normal user.");
});

app.get("/admin/show", (req, res) => {
  res.send("User Added");
});

app.get("/admin/delete", (req, res) => {
  res.send("User Deleted");
});

app.listen(333, () => {
  console.log("Server is running");
});
