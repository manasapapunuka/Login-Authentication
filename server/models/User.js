const mongoose = require("mongoose");
const {Schema} = mongoose;

//schema ->structure and validation
const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
});
 
module.exports = mongoose.model("user",UserSchema);
