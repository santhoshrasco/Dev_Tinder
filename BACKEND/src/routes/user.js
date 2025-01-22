const express = require("express");
const userRouter = express.Router();
const { userAuth } = require("../Middlewares/auth");
const ConnectionRequest = require("../models/connectionRequest");
const USER_SAFE_DATA = "firstName lastName photoUrl age gender about skills";

userRouter.get("/user/requests/receieved", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;
        const connectionRequests = await ConnectionRequest.find({
            toUser: loggedInUser._id,
            status: "interested" 
        }).populate("fromUserId", ["firstName", "lastName"]);
        
        res.json({
            message: "Data Fetched Successfully",
            data: connectionRequests,
        }); 
    } catch (err) {
        res.status(400).send("ERROR " + err);
    }
});

userRouter.get("/user/connections", userAuth, async (req, res) => {
    try {
        const loggedInUser = req.user;
        const connections = await ConnectionRequest.find({
            $or: [
                { toUserId: loggedInUser._id, status: "accepted" },
                { fromUserId: loggedInUser._id, status: "accepted" }   
            ],
        }).populate("fromUserId", USER_SAFE_DATA)
        .populate("toUserId", USER_SAFE_DATA);
        
        const data = connections.map((row) => {
          if(row.fromUserId._id.toString() === loggedInUser._id.toString()) {
            return row.fromUserId
          }  
        });
        res.json({ data });
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

module.exports = userRouter;
