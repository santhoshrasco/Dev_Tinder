const express = require('express')
const app = express();


// '/test' is a route 
// (req,res)=>{ res.send('hello my dear friennds')})  this is called response handler;
app.use('/test', (req,res)=>{ 
    res.send('hello my dear friennds')
});
app.use('/sridar',(req,res)=>{
    res.send('hello sridhar punda')
})

app.listen(3000,()=>{console.log("server is running on port 3000")});