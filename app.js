
const express = require('express');
const app = express();
const port = 3000;

app.get('/' , (req, res) =>{  // callback function jo har request pr call hoga
    res.send("Hyyyyyy")
})

app.get('/about' , (req, res) =>{  // callback function jo har request pr call hoga
    res.send("About Page")
})

app.get('/contact', (req, res) =>{
    res.send("Contack page")
})

// app.get('/:id' , (req, res) =>{    // dynamic route jo kisi bhi url pr match kr skta hai, jaise /123, /abc, etc.
//     res.send(`hey ${req.params.id}`)  // dynamic route 
// })

app.get('/data/:id' , (req, res) =>{    // dynamic route jo kisi bhi url pr match kr skta hai, jaise /123, /abc, etc.
    res.send(`hey ${req.params.id}`)  // dynamic route 
})

app.use(express.static('public'))  // static file serve krne ke liye, public folder ke andar jo bhi file hogi wo accessible hogi

app.listen(port , ()=>{    // jab server start ho jaye to ye message show hoga
    console.log("Server Chalaaa dhapaa");
})