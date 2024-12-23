const express=require('express') 
const app = express();
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/merndb')
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.error("Error connecting to MongoDB", err)
})



app.get('/', (req,res)=> {
    res.send("api running  asdasd")
})

app.listen(4000)