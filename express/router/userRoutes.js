const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("I am Harshit Shrivas Practicing Router.....");
});

router.post("/", (req, res) => {
  res.send("Create user");
});

router
  .route("/:idd")
  .get((req, res) => res.send(`User with ID: ${req.params.idd}`))
  .put((req, res) => res.send(`Upadte User id:  ${req.params.idd}`))
  .delete((req, res) => res.send(`User Id ${req.params.idd} deleted..`));

module.exports = router;
