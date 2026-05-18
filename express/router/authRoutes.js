const express = require("express");
const router = express.Router();

const { CreateUser } = require("../controllers/userrouter");

router.post("/signup", signup);
router.post("/login", login);
module.exports = router; // router ko export karna hai, taki hum usko app.js me use kar sake, jaise ki app.use("/api/users", userRoutes);
