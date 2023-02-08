const express = require("express");

let shoppingCart = express.Router();

shoppingCart.get("/", async (req, res) => {
  try {
    let tervis = "tervis kuis pyyhkis";

    res.statusCode = 200;
    res.send(tervis);
  } catch (error) {
    res.statusCode = 404;
    res.send(error);
  }
});

module.exports = shoppingCart;
