 const mongoose = require('mongoose');

 const schema = new mongoose.Schema({
    firstName:{
        type :String,
    },
    lastName:{
        type:String,
    },
    age:{
        type:Number
    },
    emailID:{
        type:String
    },
    password:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    gender:{
        type:String
    }
 });

 const userModel = mongoose.model('user', schema);
 module.exports = userModel;