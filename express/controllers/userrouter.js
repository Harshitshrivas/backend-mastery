const User = require("../models/userModel"); // User model ko import karna hai, taki hum uske methods ko use kar sake, jaise ki create, find, update, delete, etc.

const CreateUser = async (req, res) => {
  try {
    const { name, email, age, JobTitle } = req.body; // req.body se data ko access karna hai, jo ki client se aayega, jaise ki name, email, age, JobTitle, etc.
    const user = await User.create({
      // User model ke create method ka use karna hai, taki hum user ko create kar sake, aur usme name, email, age, JobTitle ko pass karna hai, jo ki req.body se aayega
      name,
      email,
      age,
      JobTitle,
    });
    res.status(201).json({ message: "User created successfully", user }); // response me status code 201 ke sath ek json object send karna hai, jisme message aur user ka data hoga
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message }); // agar error aata hai, to response me status code 500 ke sath ek json object send karna hai, jisme message aur error ka message hoga
  }
};

const userapi = async (req, res)=>{
const allDbuser = await User.find(); // User model ke find method ka use karna hai, taki hum database me se sabhi users ko fetch kar sake, aur usko response me send kar sake
res.json(allDbuser);
};

const usercreater = async (req, res) => {
  try {
    res.status(200).send("I am Harshit Shrivas Practicing Router.....");
  } catch (error) {
    res.status(500).json({ message: "Error in user creation", error });
  }
};

const regester = (req, res) => {
  res.status(200).send("WellCome to the regestration Page Using Controlers...");
};

module.exports = { usercreater, regester , CreateUser , userapi }; // usercreater, regester, CreateUser, userapi functions ko export karna hai, taki hum usko router me use kar sake
