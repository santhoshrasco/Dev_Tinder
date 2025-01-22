const mongoose = require("mongoose");

const connectionRequestSchema =  new mongoose.Schema({
    fromUserId:{
        type : mongoose.Schema.Types.ObjectId,
        ref: "User", //reference to the user collection 
        require: true,
    },
    toUserId:{
        type : mongoose.Schema.Types.ObjectId,
        ref :"User",
        require: true,
    },
    status:{
        type : String,
        require: true,
        enum: {
            values: ['accepted', 'interested', 'rejected', 'ignored'],
            message:`{VALUE} is incorrect status type`
        }
    },
    },
    {
        timestamps: true,
    }
);

connectionRequestSchema.index({fromUserId : 1});

connectionRequestSchema.pre("save", function(){
    const connectionRequest = this;
    //Check if the fromUserID is sae as to UserId
    if(connectionRequest.fromUserId.equals(connectionRequest.toUserId)){
        throw new Error ("CANNOT SEND CONNECTION REQUEST TO YOURSELF ");
    }
})
const ConnectionRequestModel = new mongoose.model("ConnectionRequest", connectionRequestSchema);
module.exports = ConnectionRequestModel;