const express = require("express");
const app = express();

require("../src/config/database.js");

app.listen(3333, () => {
  console.log("Server is running");
});
