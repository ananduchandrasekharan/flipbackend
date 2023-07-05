//Automatically load .env file in to our Application
require('dotenv').config()


//Import express
const express = require('express')

//Import Cors
const cors = require('cors')

//Import connection.js
require('./db/connection')

//Import routes
const router=require('./routes/router')

//Create an application using Express
const server = express()

//Define port
const PORT = 5000

//use in server app
server.use(cors())
server.use(express.json())
server.use(router)
  

//Run App
server.listen(PORT, () => {
    console.log('listening on the port' + PORT);
})

//route - localhost:5000
server.get('/',(req,res)=>{
    res.status(200).json("E commerce server starts....")
})