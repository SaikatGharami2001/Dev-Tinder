const express = require("express");

const app = express();

app.get("/a/:userName/:Number/:Name", (req, res) => {
  console.log(req.params);
  res.send({ firstName: "Saikat", lastName: "Gharami" });
});

app.listen(333, () => {
  console.log("Server is running");
});
