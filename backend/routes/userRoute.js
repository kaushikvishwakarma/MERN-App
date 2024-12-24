const express=require('express') ;
const mongoose = require('mongoose');
const User=require("../models/userModel.js");
const router=express.Router();

// this part

router.post("/",async(req,res)=>{
    
    const {name,email,age}=req.body;

    try {
        const userAdded=await User.create({
            name:name,
            email:email,
            age:age
        })
        res.status(201).json(userAdded);
        
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
    }
})
router.get('/', async(req,res)=> {
    try {
        const showAll=await User.find();

        res.status(201).json(showAll);
        return;
    } catch (error) {
        console.log(error);
        res.status(400).json({error: error.message})
        return;
    }
    res.send("api running laoda lona mera")
});
//GET SINGLE USER
router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const singleUser = await User.findById({ _id: id });
      res.status(200).json(singleUser);
      return;
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
        return;
    }
  });




//GET SINGLE USER BY NAME


// router.get("/:name", async (req, res) => {
//     const name = req.params.name;
  
//     try {
//       const singleUser = await User.findOne({ name: name });
//       if (!singleUser) {
//           return res.status(404).json({ message: "User not found" });
//       }
//       res.status(200).json(singleUser);
//     } catch (error) {
//         console.log(error);
//       res.status(500).json({ error: error.message });
//     }
//   });






  
//DELETE
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await User.findByIdAndDelete({ _id: id });
      res.status(201).json(deletedUser);
      return;
    } catch (error) {
      res.status(400).json({ error: error.message });
        return;
    }
  });
//PATCH
router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const {name,email,age}=req.body;
    try {
      const updateuser = await User.findByIdAndUpdate(id,req.body,{
        new:true,
      });
      res.status(201).json(updateuser);
      return;
    } catch (error) {
      res.status(400).json({ error: error.message });
        return;
    }
  });






module.exports =router;