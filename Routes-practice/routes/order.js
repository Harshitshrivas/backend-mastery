const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Order Created");
});

// ⚠️ Special route pehle aayega (order issue avoid karne ke liye)
router.get("/user/:userId", (req, res) => {
  res.send(`Orders for User ${req.params.userId}`);
});

// GET, PUT, DELETE for single order
router
  .route("/:id")
  .get((req, res) => res.send(`Order ID: ${req.params.id}`))
  .put((req, res) => res.send(`Order Updated: ${req.params.id}`))
  .delete((req, res) => res.send(`Order Deleted: ${req.params.id}`));

module.exports = router;