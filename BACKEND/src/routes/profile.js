const express = require("express");
const profileRouter = express.Router();
const { userAuth } = require("../Middlewares/auth");
const { validateEditProfileData } = require("../utils/validation");

profileRouter.get("/profile/view", userAuth, async (req, res) => {
  try {
    //validate my token
    const user = req.user;
    res.send(user);
  } catch {
    res.status(400).send("ERROR : " + err.message);
  }
});

profileRouter.patch("/profile/edit", userAuth, async (req, res)=>{
    try {
        if(!validateEditProfileData(req)){
            throw new Error ("INVALID EDIT REQUEST") 
        }
        const loggedInUser = req.user;
        console.log(loggedInUser);
        Object.keys(req.body).forEach((key)=>(loggedInUser[key] = req.body[key])); 
        console.log(loggedInUser);
        res.json({message : `${loggedInUser.firstName} ,profile updated successfully`,data:loggedInUser});

    } catch (err) {
        res.status(400).send("EROR : " + err.message);
    }

})
module.exports = profileRouter;
