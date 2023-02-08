const express = require("express");

let shoppingCart = express.Router();

shoppingCart.get("/", async (req, res) => {
  try {
    let tervis = { message: "tervis kuis pyyhkis", message2: "fine thanks" };
    let jsoned = JSON.stringify(tervis);
    res.statusCode = 200;
    res.send(jsoned);
  } catch (error) {
    res.statusCode = 404;
    res.send(error);
  }
});

module.exports = shoppingCart;
