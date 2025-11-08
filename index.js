console.log("Hello");
const { log } = require("console");
//file Systemmm
// let fs = require('fs');
// console.log(fs);
// fs.writeFileSync('index.txt', "Hello how are you...")
// let data =  fs.readFileSync('index.txt')
// console.log(data.toString());
// fs.appendFileSync('index.txt', " I am Harshit")
//fs.unlinksync('index.txt');

// operating system information
// let os = require('os');
// console.log(os.version());
// console.log(os.type());
// console.log(os.hostname());
//npx nodemon start

//How to create a Server
// let express = require('express')
// let app = express();

//It is like bodyguard
// app.use('/', (req, res)=>{
//    res.send("Maii huu naaa")
// })

// app.use('/', (req, res,next)=>{
//     res.send("Heloooo guyssss ")
//     next();
// })

// app.get('/:id', (req, res)=>{
//     let data = req.params.id
//     res.send(`Hello  ${data}`)
// })

// let arr = ['cat', 'dog', 'tiger', 'lion', 'cat', 'dog', 'tiger', 'lion']
// app.get('/:ani', (req, res)=>{
//     let {ani} = req.params;
//     let data = arr.filter((a)=>{
//         return a === ani;
//     })

//     res.send(data)
// })

// let arr = ['Harshit Shrivas', 'Ankit Shrivas', 'Ankush Shrivas', 'Anurag Shrivas', 'Harshit Shrivas', 'Ankit Shrivas', 'Harsh Tiwari']

//     app.get('/name', (req, res)=>{
//         let {Firstname, Lastname} = req.query;
    
//         res.send(`Firstname: ${Firstname}  Lastname: ${Lastname}`)
//     })

// app.get('/', (req, res)=>{
//  res.send("Hello Server chalaaaa")
// })
// app.get('/home', (req, res)=>{
//  res.send("Hello Server Home ka andar challaaa")
// })

//Fine bana ka save krna and read krna
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/save', (req, res) => {
  const { name } = req.query;
  if (!name) return res.send('Please provide a name in query!');
  fs.appendFileSync('names.txt', name + '\n');
  res.send(`Name "${name}" saved successfully!`);
});

app.get('/show', (req, res) => {
  if (!fs.existsSync('names.txt')) return res.send('No names found!');
  const data = fs.readFileSync('names.txt', 'utf8');
  res.send(`<pre>${data}</pre>`);
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:4000');
});
// http://localhost:4000/save?name=Harshuuu

// app.listen(4000, ()=>{
//     console.log("Server  Running on port 4000");
// })

