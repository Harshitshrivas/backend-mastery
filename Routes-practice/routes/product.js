const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("All Product by Routerfor User...");
});

router.get("/:id", (req, res) => {
  res.send(`Get Product with ID ${req.params.id}`);
});

// POST create product
router.post("/", (req, res) => {
  res.send("Create Product");
});

// PUT update product
router.put("/:id", (req, res) => {
  res.send(`Update Product with ID ${req.params.id}`);
});

// DELETE product
router.delete("/:id", (req, res) => {
  res.send(`Delete Product with ID ${req.params.id}`);
});

// SEARCH (query params)
router.get("/search/item", (req, res) => {   // http://localhost:3000/product/search/item?name=phone&price=10000
 
  const { name, price } = req.query;
  res.send(`Search Product: ${name}, Price: ${price}`);
});

module.exports = router;
