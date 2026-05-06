const Contact = require("../models/contackModel");

const Createcontact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = await Contact.create({
      name,
      email,
      phone: Number(phone), // phone number ko number me convert karna hai, taki database me number ke roop me store ho sake
      message: message,
    });
    res.status(201).json({ message: "Contact created successfully", contact }); // response me status code 201 ke sath ek json object send karna hai, jisme message aur contact ka data hoga
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { Createcontact }; // Createcontact function ko export karna hai, taki hum usko router me use kar sake, jaise ki create contact ke liye post method ka use karna hai, taki hum client se data bhej sake, aur usko create kar sake, jaise ki name, email, phone, message, etc.