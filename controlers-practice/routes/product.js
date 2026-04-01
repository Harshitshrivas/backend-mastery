const express = require("express");
const router = express.Router();

const productControler = require("../controllers/productcControler");

router.get("/", productControler.getAllProducts);

// POST create product
router.post("/", productControler.CreateProduct);

// GET product by ID
router.get("/:id", productControler.getProductById);

// PUT update product
router.put("/:id", productControler.updateProduct);

// DELETE product
router.delete("/:id", productControler.deleteProduct);

// SEARCH (query params)
router.get("/search/item", productControler.searchProduct); // http://localhost:3000/product/search/item?name=phone&price=10000

module.exports = router;
