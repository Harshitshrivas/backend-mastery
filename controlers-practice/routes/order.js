const express = require("express");
const router = express.Router();

const orderController = require("../controllers/ordercontroler");

router.get("/", orderController.getAllOrders);

// ⚠️ Special route pehle aayega (order issue avoid karne ke liye)
router.get("/user/:userId", orderController.getOrdersByUserId);

// GET, PUT, DELETE for single order
router
  .route("/:id")
  .get(orderController.getOrderById)
  .put(orderController.updateOrderById)
  .delete(orderController.deleteOrderById);

module.exports = router;