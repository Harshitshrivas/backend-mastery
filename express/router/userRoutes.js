const express = require('express')

const router = express.Router();

router.get('/', (req, res) =>{
res.status(200).send("I am Harshit Shrivas Practicing Router.....")
})

router.get('/:idd', (req, res) =>{
     res.send(`Update user with ID: ${req.params.idd}`)
})

module.exports = router
