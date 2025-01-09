const mongoose = require("mongoose");
const validator= require("validator");

const schema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 50
  },
  lastName: {
    type: String,
  },
  age: {
    type: Number,
    validata:{
      validator: function(value){
        return value >= 18 && value <= 60;
      },
      message: "Age must be between 18 and 60"
    }
  },
  emailID: {
    type: String,
    lowercase:true,
    required: true,
    unique: true,
    trim : true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error("Invalid Email" +value);
      }
    }
  },
  password: {
    type: String,
    required: true,
    validate(value){
      if(!validator.isStrongPassword(value)){
        throw new Error("WEAK password" + value);
      }
    }
  },
  phoneNumber: {
    type: Number,
    // required: true,
  },
  gender: {
    type: String,
    validate(value){
      if(!['male','female',"Others"].includes(value)){
        throw new Error('Invalid gender')
      };
    }
  },
  photoUrl: {
    type: String, 
    default:"https://www.google.com/imgres?q=logo%20profile%20png&imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20191110%2Fourmid%2Fpngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fprofile-icon&docid=_39XTgMKwHFqSM&tbnid=oi_Go1ieNFYJRM&vet=12ahUKEwjCyOqc1-OKAxVpSGwGHaJMNIUQM3oECB0QAA..i&w=360&h=360&hcb=2&ved=2ahUKEwjCyOqc1-OKAxVpSGwGHaJMNIUQM3oECB0QAA",
    validate(value){
    if (!validator.isURL(value)){
      throw new Error("Invalid photo url" + value);
    }},

  },
  about: {
    type: String,
    default: "This is default description of USER",
  },
  skills: {
    type: [String],
  },
 
},
{
  timestamps: true
},);

const userModel = mongoose.model("user", schema);
module.exports = userModel;
