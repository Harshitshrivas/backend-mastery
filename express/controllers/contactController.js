const Contact = require("../models/contackModel");

const Createcontact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const contact = await Contact.create({
      name,
      email,
      phone: Number(phone), // phone number ko number me convert karna hai, taki database me number ke roop me store ho sake
      Message: message,
    });
    res.status(201).json({ message: "Contact created successfully", contact }); // response me status code 201 ke sath ek json object send karna hai, jisme message aur contact ka data hoga
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
