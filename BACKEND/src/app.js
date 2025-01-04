const express = require('express')
const app = express();



app.get('/getUserData', (req,res)=>{
    try {
        res.send("User Data Sent")
    } catch (error) {
        res.statusCode().send("Some error contact support team")
    }
})
app.get('/user',(err,req,res,next)=>{
if(err){
    res.status(500).send("Something went wrong")
}
    
    res.send("user data sent");
})





app.listen(3000,()=>{console.log("server is running on port 3000")});