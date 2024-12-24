const mongoose=require('mongoose');



//schema for Model


const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        // unique:true

    },
    age:{
        type:Number,
        required:true
    }
},{timestamps:true});

// create Modek

const User=mongoose.model('User',userSchema);
module.exports=User;