const mongoose = require("mongoose");

const mongoDB = "mongodb://localhost:27017/my_database";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoDB);
    //  mongoose.connect("mongodb://localhost:27017/my_database") direct bhi likh sakte
    console.log("Mongodb Connected...");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;