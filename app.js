
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

app.get("/search" , (req, res) =>{   // query parameter ko access krne ke liye
    res.send(`Search for ${req.query.q}  and  ${req.query.category}`)  //  http://localhost:3000/search?q=javascript&category=programming
})

app.use(express.static('public'))  // static file serve krne ke liye, public folder ke andar jo bhi file hogi wo accessible hogi

app.listen(port , ()=>{    // jab server start ho jaye to ye message show hoga
    console.log("Server Chalaaa dhapaa");
})