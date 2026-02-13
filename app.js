
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

app.post("/submit", (req , res) =>{  // post request is used for submitting form data to the server
    console.log("Form Submitted")       // post request ko handle krne ke liye, jab form submit hoga to ye message show hoga
    res.send("Form Submitted Successfully")
})

app.put("/update" , (req, res) =>{  // put request is used for updating data on the server
    console.log("Data Updated")       // put request ko handle krne ke liye, jab data update hoga to ye message show hoga
    res.send("Data Updated Successfully")
})

app.delete("/delete" , (req, res) =>{  // delete request is used for deleting data from the server
    console.log("Data Deleted")       // delete request ko handle krne ke liye, jab data delete hoga to ye message show hoga
    res.send("Data Deleted Successfully")
})


// Response Methods
app.get("/index", (req, res) => {  // ye route index.html file ko serve karega
    res.sendFile(__dirname + "/templates/index.html"); // __dirname se current directory ka path milta hai
});

app.get("/api", (req, res) => {  // ye route about.html file ko serve karega
    res.json({a:1 , b:2 , c:3 , namee:["Harshit Shrivas" , " Rahool" , "Sneha" ]}  ); // json method se hum json data send kr skte hai, ye data client ko milega
});

app.use((req, res) => {
  res.status(404).send("404 - Page not found"); // ye middleware function hai jo 404 error handle karega, jab koi route match nahi hoga to ye function call hoga    
});


app.listen(port , ()=>{    // jab server start ho jaye to ye message show hoga
    console.log("Server Chalaaa dhapaa");
})