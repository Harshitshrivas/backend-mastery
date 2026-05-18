
const moonoose = require("mongoose");

const userSchema = new moonoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = moonoose.model("Userr", userSchema);
