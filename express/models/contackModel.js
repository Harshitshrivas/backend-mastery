const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true, // remove extra spaces
    },
    email: {
        type: String,
        required: true,
        trim: true, // remove extra spaces
    },
    phone: {
        type: Number,
        required: true,
        trim: true, // remove extra spaces
    },
    Message: {
        type: String,
        required: true,
        trim: true, // remove extra spaces
    }

} , { timestamps: true }); // timestamps option se createdAt aur updatedAt fields automatically add ho jate hain, jo ki contact ke creation aur update time ko track karte hain
module.exports = mongoose.model("Contact", ContactSchema); // contactSchema se ek model create karna hai, jiska naam "contact" hoga, aur usko export karna hai, taki hum usko controllers me use kar sake, jaise ki create, find, update, delete, etc.
