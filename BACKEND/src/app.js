const express = require('express')
const app = express();
const {connectDB} = require("../src/config/database")
const User = require("../src/models/user")

app.use(express.json())
app.post("/signup", async (req,res) =>{

    console.log(req.body)
    // creating a new instance of the user model  
    const user = new User(req.body);
    try {
        await user.save();
    res.send("User added successfully");
    } catch (error) {
        res.status(400).send("something went wrong")  ;
}
 });

//GET  user by email
app.get('/user', async(req,res)=>{
    const userEmail = req.body.emailID;
    try {
        const user = await User.findOne({emailID: userEmail});
        if (!user) {
            res.status(404).send("User Not Found")
        } else {
            res.send(user)
        }
        // if(user.length ===0){
        //     res.status("User not found");
        // }else{
        //     res.send(user);
        // }
    }
    catch(err){
        res.statusCode().send("something Went wrong")
    }
})

//Feed API -GET/feed - get all the users from the database
app.get('/feed', async(req,res)=>{
try {
    const users = await User.find({});
    res.send(users);
} catch (error) {
  res.status(400).send("something went wrong")  
}
});

//DELETE an user by their ID
app.delete('/user', async (req,res)=>{
    const userId = req.body.userId;
    try{
const user = await User.findByIdAndDelete(userId)
res.send("user deleted Succesfully");
    }catch (error) {
  res.status(400).send("something went wrong")  ;
}
});

//PATCH - update a user by theri ID
app.patch("/user", async (req,res)=>{
    const userId = req.body.userId;
    const data = req.body
    try{
    const user = await User.findByIdAndUpdate({_id:userId},data,{returnDocument:"before"});
    console.log(User)
    res.send("User Updated Succesfully");
    }catch (error) {
        res.status(400).send("something went wrong");
    }
})

connectDB()
.then(()=>{
console.log("database connected sucessfully")
app.listen(3000, ()=>{console.log("server is running on port 3000")})
})
.catch((err)=>{
    console.error("eroor connecting to server ",err)
});