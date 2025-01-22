const jwt = require("jsonwebtoken")
const User  = require("../models/user") // Updated to use the correct model name

const userAuth = async (req,res,next)=>{
    //read the  token from request cookies
   try{ const {token} = req.cookies;
   if(!token){
    throw new Error("Token is NOT VALID!!!")
   }
    const decodedObj = await jwt.verify(token, "DEV@tinder$790");
    const {_id} = decodedObj;
    const user = await User.findById(_id);
    if(!user ){
        throw new Error ("USER NOT FOUND")
    }
    req.user = user
    next();
}catch(err){
    res.status(404).send("ERROR : "  + err.message)
}};

module.exports = {userAuth};
