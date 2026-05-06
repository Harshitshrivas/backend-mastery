const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // remove extra spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  JobTitle: {
    type: String,
  }, 

}, { timestamps: true }); // timestamps option se createdAt aur updatedAt fields automatically add ho jate hain, jo ki user ke creation aur update time ko track karte hain

module.exports = mongoose.model("User", userSchema); // userSchema se ek model create karna hai, jiska naam "User" hoga, aur usko export karna hai, taki hum usko controllers me use kar sake, jaise ki create, find, update, delete, etc.