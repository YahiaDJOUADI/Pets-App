const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const petRoute = require('./routes/petsRoute')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(petRoute)

mongoose.connect("mongodb://localhost:27017/pets")


app.listen(3000,()=>console.log("started server on http://localhost:3000"))