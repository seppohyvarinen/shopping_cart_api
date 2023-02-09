const express = require("express");

const connections = require("./database");

let shoppingCart = express.Router();

shoppingCart.get("/", async (req, res) => {
  try {
    let list = connections.getAll();
    let jsonedList = JSON.stringify(list);
    res.statusCode = 200;
    res.send(jsonedList);
  } catch (error) {
    res.statusCode = 404;
    res.send(error);
  }
});

module.exports = shoppingCart;
