const express = require("express");
const router = express.Router();
const userController = require("../controllers/userControler") // Importing the user controller

router.get("/", userController.createUser);


router.route("/register").get(userController.registerUser);

router
  .route("/:idd")
  .get(userController.getUserById)
  .put(userController.updateUserById)
  .delete(userController.deleteUserById);

module.exports = router;
