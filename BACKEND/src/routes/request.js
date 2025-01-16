const express = require("express");
const requestRouter = express.Router();
const {userAuth} = require("../Middlewares/auth")

requestRouter.post("/sendConnectionRequest", userAuth, async (req, res) => {
  const user = req.user;
  //Sending a Connection Request
  console.log("sending a connection request");

  res.send(user.firstName + " Sent the Connection Request ");
});

module.exports = requestRouter;
