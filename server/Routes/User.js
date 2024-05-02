// Import the necessary modules
const express = require("express");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const mongoose = require('mongoose');
const User = require("../models/User");
const jwt=require("jsonwebtoken")

//import verifytoken mw
const verifyToken=require("../APIs/middlewares/verifyToken")

// Define the user signup route
router.post("/user-signup", async (request, response) => {
  try {

        const user=request.body;
        let userEmail = request.body.email;
        const isUser=await User.findOne({email:userEmail})
        if(isUser){
            return response.status(400).json({message:"user already exists"})
        }
        const hashedPassword = await bcryptjs.hash(user.password,(10));
        //console.log(userPassword);
        user.password=hashedPassword
        await User.create(user).then(response.json({message:"user created"}))
  } 
  catch (error) {
    console.error("Error creating user:", error);
    response.status(500).send({ message: "Error creating user" });
  }
});



router.post("/user-login",async(request,response)=>{

      const userCredObj=request.body;
    
      let userOfDb=await User.findOne({email:userCredObj.email})

      if(userOfDb===null){
        response.status(200).send({message:"Invalid email"})
      }
      else{
        let isEqual=await bcryptjs.compare(userCredObj.password,userOfDb.password)
        if(isEqual===false){
            response.status(200).send({message:"Invalid password"})
        }
        else{
            console.log("Login success");
            //create JWT token
            let jwtToken=jwt.sign({email:userOfDb.email},'abcdefgh',{expiresIn:100})
            delete userOfDb.password;
            response.status(200).send({message:"success",token:jwtToken,user:userOfDb})

        }
      }

})


router.get("/get-users",async(request,response)=>{

   //get users from db
   let usersList=await User.find()
   response.status(200).send({message:"Users:",payload:usersList})
})


module.exports=router;