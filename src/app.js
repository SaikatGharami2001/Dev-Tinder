const express = require("express");

const app = express();

app.use("/home", (req, res) => {
  res.send("how many niggas in paris?");
});

app.use("/a", (req, res) => {
  res.send("paris?");
});

app.use("/hello", (req, res) => {
  res.send("is pari s?");
});

app.listen(333, () => {
  console.log("Nigga");
});
