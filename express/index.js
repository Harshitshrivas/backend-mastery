// import express from 'express'
const expess = require('express');
const app = expess();

app.get( '/', (req, res)=>{
  res.send("Hyyy expresss ! ")
});
// app.get('/about' , (req, res) =>{
//     res.send(`<h1>My name is Harshit shrivassss </h1>`)
// });

// routes for rest api (new topic)

const users = require("./MOCK_DATA.json");  // json file se data import krne ke liye

app.get("/users", (req, res) => {  // ye route users.html file ko serve karega, jisme users ki list show hogi
    const html = `
    <ul>
     ${users.map((user) => `<li> ${user.first_name} </li>` ).join("")}
    </ul>`;
    res.send(html);
});

// Rest api me hum json data send krte hai, isliye hum json method ka use karenge
app.get( "/api/users", (req , res) => {
 return res.json(users);  // list all user 
});
 // dynamic route for getting user by id, jaise /api/users/1, /api/users/2, etc.
app.get("/api/users/:id", (req, res) =>{
    const id =  Number(req.params.id);  // dynamic route se id ko access krne ke liye
    const user = users.find((user) => user.id === id);  // find method se user ko find krne ke liye, jo id match karega wo user return hoga
    if(!user){
        return res.status(404).json({error: "User not found"});
    }
    return res.json(user);
})

const axios = require('axios');

app.get('/news',  async(req , res) => {
     try {

        const response = await axios.get("https://api.sampleapis.com/futurama/episodes");
         res.json(response.data);

     } catch (error) {
        res.send("Error fetching API");
     }
});

// title

app.get('/title',  async(req , res) => {
     try {

        const response = await axios.get("https://api.sampleapis.com/futurama/episodes");
        const titile = response.data.map((item) =>item.title);
        res.json(titile);
        // res.json(response.data);

     } catch (error) {
        res.send("Error fetching API");
     }
});

app.listen(3000 , ()=>{
    console.log("Server is running...");
    
});