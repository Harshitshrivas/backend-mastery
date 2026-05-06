const express = require("express");
const router = express.Router();

const {Createcontact} = require("../controllers/contactController");

router.post("/create", Createcontact); // create contact ke liye post method ka use karna hai, taki hum client se data bhej sake, aur usko create kar sake, jaise ki name, email, phone, message, etc.  

module.exports = router;