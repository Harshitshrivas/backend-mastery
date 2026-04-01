const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  //console.log("User Cretedd by Routerr.....");
  res.send("All User Cretedd by Routerr.....");
});

router.route("/register").get((req, res) => {
  res.send("User Registerd by Routerr.....");
});

router
  .route("/:idd")
  .get((req, res) => res.send(`User with ID: ${req.params.idd}`))
  .put((req, res) => res.send(`Upadte User id:  ${req.params.idd}`))
  .delete((req, res) => res.send(`User Id ${req.params.idd} deleted..`));

module.exports = router;
