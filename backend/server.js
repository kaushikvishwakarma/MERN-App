const express=require('express') ;
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const userRoute=require("./routes/userRoute.js");


// middleware
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


app.use(userRoute);
