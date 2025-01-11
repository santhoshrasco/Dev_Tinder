const express = require("express");
const app = express();
const { connectDB } = require("../src/config/database");
const User = require("../src/models/user");
const bcrypt = require("bcrypt");
const {
  validateSignUpData,
  validationLoginData,
} = require("../src/utils/validation");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(cookieParser());
app.post("/signup", async (req, res) => {
  try {
    //validation of data
    validateSignUpData(req);

    //encrypt the passwordhone
    const { firstName, lastName, emailID, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);
    console.log(passwordHash);
    // creating a new instance of the user model
    const user = new User({
      firstName,
      lastName,
      emailID,
      password: passwordHash,
    });

    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

//GET  user by email
app.get("/user", async (req, res) => {
  const userEmail = req.body.emailID;
  try {
    const user = await User.findOne({ emailID: userEmail });
    if (!user) {
      res.status(404).send("User Not Found");
    } else {
      res.send(user);
    }
    // if(user.length ===0){
    //     res.status("User not found");
    // }else{
    //     res.send(user);
    // }
  } catch (err) {
    res.statusCode().send("something Went wrong");
  }
});

app.get("/profile", async (req, res) => {
  try {
    const cookie = req.cookies;
    const { token } = cookie;
    if(!token){
      throw new Error("INVALID TOKEN")
    }
    //validate my token
    const decodedMessage = await jwt.verify(token, "DEV@tinder$790");
    const _id = decodedMessage;
    console.log("Logged in user  is : ", _id);
    const user = await User.findById(_id);
    if(!user){
      throw new Error ("USER NOT FOUND")
    }
    res.send(user);
  } catch {
    res.status(400).send("ERROR : " + err.message);
  }
});
//login API
app.post("/login", async (req, res) => {
  try {
    const { emailID, password } = req.body;
    validationLoginData(req);

    const user = await User.findOne({ emailID: emailID });
    if (!user) {
      throw new Error("INVALID CREDENTIALS");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      //create JWT token
      const token = await jwt.sign({ _id: user._id }, "DEV@tinder$790");
      console.log(token);
      //Add a token to cookie
      res.cookie("token", token);

      res.send("LOGIN SUCCESSFUL!!!");
    } else {
      throw new Error("INVALID CREDENTIALS");
    }
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});
//Feed API -GET/feed - get all the users from the database
app.get("/feed", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});

//DELETE an user by their ID
app.delete("/user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findByIdAndDelete(userId);
    res.send("user deleted Succesfully");
  } catch (error) {
    res.status(400).send("something went wrong");
  }
});

//PATCH - update a user by theri ID
app.patch("/user/:userId", async (req, res) => {
  const userId = req.params?.userId;
  const data = req.body;
  try {
    const ALLOWED_UPDATES = [
      "age",
      "photoUrl",
      "gender",
      "about",
      "userId",
      "skills",
    ];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      ALLOWED_UPDATES.includes(k)
    );
    if (!isUpdateAllowed) {
      throw new Error("Update Not Allowed");
    }
    if (data?.skill.length > 10) {
      throw new Error("Skill should be less than 10");
    }
    const user = await User.findByIdAndUpdate({ _id: userId }, data, {
      returnDocument: "after",
    });
    console.log(user);
    res.send("User Updated Succesfully");
  } catch (err) {
    res.status(400).send("User update Failed " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("database connected sucessfully");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("eroor connecting to server " + err);
  });
