const express=require('express') ;
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User=require("./models/userModel");
dotenv.config();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());


mongoose.connect(process.env.URL)
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen(process.env.PORT,(err)=>{
        if(err)console.error(err);
        console.log("running successfully at ",process.env.PORT)
    });
}).catch((err)=>{
    console.error("Error connecting to MongoDB", err)
})



// this part take the input and stores in the database

app.post("/",async(req,res)=>{
    const {name,email,age}=req.body;

    try {
        const userData=await User.create({
            name:name,
            email:email,
            age:age
        })
        res.status(201).json(userData);
        
    } catch (error) {
        console.log(error);
        res.send(400).json({error: error.message})
    }
})









// this part is for first "/" page rendering 
app.get('/', (req,res)=> {
    res.send("api running laoda lona mera")
})
