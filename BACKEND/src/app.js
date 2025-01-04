const express = require('express')
const app = express();



app.get('/test',(req,res)=>{
    res.send('receieved the request')
})

app.post('/test', (req, res)=>{
    res.send({Fname:"santhosh",Lname:'kumar'});
})

app.delete('/test',(req,res)=>{
    res.send('data deleted successfully')
})

// '/test' is a route 
// (req,res)=>{ res.send('hello my dear friennds')})  this is called response handler;
app.use('/test', (req,res)=>{ 
    res.send('hello my dear friennds')
});


app.listen(3000,()=>{console.log("server is running on port 3000")});