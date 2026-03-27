const express = require("express");
const router = express.Router();

const { usercreater , regester } = require("../controllers/userrouter");

router.get("/", usercreater);

router.route("/regester").get(regester);

router.post("/", (req, res) => {
  res.send("Create user");
});

router
  .route("/:idd")
  .get((req, res) => res.send(`User with ID: ${req.params.idd}`))
  .put((req, res) => res.send(`Upadte User id:  ${req.params.idd}`))
  .delete((req, res) => res.send(`User Id ${req.params.idd} deleted..`));

module.exports = router;
