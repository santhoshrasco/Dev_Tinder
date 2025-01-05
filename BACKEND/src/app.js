const express = require('express')
const app = express();
const {connectDB} = require("../src/config/database")
const User = require("../src/models/user")

app.post("/signup", async (req,res) =>{
    // creating a new instance of the user model
    const user = new User({
        firstName : "SRIDHAR",
        lastName : "ELUMALAI",
        emailID : "sridharpotta@gmail.com",
        password : "",
        age: 50,
        gender: "female"
    })
    try {
        await user.save();
    res.send("User added successfully");
    } catch (error) {
        res.statusCode().send("Error happend while adding user" +  error);
    }
    
});

connectDB()
.then(()=>{
console.log("database connected sucessfully")
app.listen(3000, ()=>{console.log("server is running on port 3000")})
})
.catch((err)=>{
    console.error("eroor connecting to server ",err)
});