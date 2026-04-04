const express = require("express");
const router = express.Router();

const {CreateUser,  usercreater , regester } = require("../controllers/userrouter");

router.get("/", usercreater);

router.route("/regester").get(regester);

router.post("/create", CreateUser); // create user ke liye post method ka use karna hai, taki hum client se data bhej sake, aur usko create kar sake, jaise ki name, email, age, JobTitle, etc.

router
  .route("/:idd")
  .get((req, res) => res.send(`User with ID: ${req.params.idd}`))
  .put((req, res) => res.send(`Upadte User id:  ${req.params.idd}`))
  .delete((req, res) => res.send(`User Id ${req.params.idd} deleted..`));

module.exports = router;
