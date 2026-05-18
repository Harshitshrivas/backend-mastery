const Userr = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// signup

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check if user already exists
    const existingUser = await Userr.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await Userr.create({
      name,
      email,
      password: hashedPassword,
    });
    return res
      .status(201)
      .json({ message: "User created successfully", User: user });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

// login

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user already exists
    const existingUser = await Userr.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // check password
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password,
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }
    // generate token
    const token = jwt.sign({ userId: existingUser._id }, "secretkey", {
      expiresIn: "1h",
    });
    return res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { signup, login }; // signup aur login functions ko export karna hai, taki hum usko router me use kar sake, jaise ki post method ka use karna hai, taki hum client se data bhej sake, aur usko create kar sake, jaise ki name, email, password, etc.
